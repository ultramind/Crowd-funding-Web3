import React, { useState, useEffect } from "react";
import Wenb3Modal from "web3modal";
import { ethers } from "ethers";

import { crowdFundingABI, crowdFundingAddress } from "./contants";
// fetch the contra

const fetchContract = (signerOrProvider) => {
  new ethers.Contract(crowdFundingAddress, crowdFundingABI, signerOrProvider);
};

export const crowdingFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
  const titleData = "CrowdFunding Contract";
  const [currentAccount, setCurrentAccount] = useState("");

  const createCampaign = async (campaign) => {
    const { title, description, amount, deadline } = campaign;
    const web3Modal = new Wenb3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    console.log(currentAccount);
    try {
      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(amount, 18),
        new Date(deadline).getTime()
      );

      await transaction.wait();
      console.log("Contract call success", transaction);
    } catch (error) {
      console.log(error);
    }
  };

  // get all campaigns
  const getCampaign = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const campaigns = await contract.getAllCampaigns();
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: i,
    }));

    return parsedCampaigns;
  };

  // getUser campiagn
  const getUserCampaign = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const allCampaigns = await contract.getAllCampaigns();

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const currentUser = accounts[0];

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === "oxfilndlnscdsncdjncsdhjscldc"
    );

    const userData = filteredCampaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: i,
    }));

    return userData;
  };

  // donate fund into the campaign

  const donate = async (id, amount) => {
    const web3modal = new Wenb3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const campaignData = await contract.donateToCampaign(id, {
      value: ethers.utils.parseEther(amount),
    });

    await campaignData.wait();
    location.reload();

    return campaignData;
  };

  // get individual donations
  const getDonations = async (id) => {
    const provider = new ethers.providers.JsonRpcProvider(connection);
    const contract = fetchContract(provider);

    const donations = await contract.getDonators(id);
    const numberOfDonations = donations[0].length;

    const parseDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parseDonations.push({
        donator: donations[0][i],
        donations: ethers.utils.formatEther(donations[0][i].toString()),
      });
    }

    return parseDonations;
  };

  // if wallet is connected

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        return setOpenError(true), setError("Install MetaMask");
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account found");
      }
    } catch (error) {
      console.log("Something wrong while connecting to wallet");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  // connect wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Something wrong while connecting to wallet");
    }
  };

  return (
    <crowdingFundingContext.Provider
      value={{
        titleData,
        currentAccount,
        createCampaign,
        getCampaign,
        getUserCampaign,
        getDonations,
        donate,
        connectWallet,
      }}
    >
      {children}
    </crowdingFundingContext.Provider>
  );
};
