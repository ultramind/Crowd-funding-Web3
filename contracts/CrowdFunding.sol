// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
        
    }

    uint256 numberOfCampaign = 0;

    mapping (uint256=>Campaign) campaigns;

    // Creating new campaign
    function createCampaign (address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaign];

        require(campaign.deadline < block.timestamp, "The dealine should be a date in furture");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;

        numberOfCampaign ++;

        return numberOfCampaign -1;
        
    }
    // donate to comapaign
    function donateToCampaign (uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value:amount}("");
        if(sent){
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    // geting all donators
    function getDonators (uint256 _id) public view returns (address[] memory, uint256[] memory){
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    // get campaigns
    function getAllCampaigns () public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaign);

        for (uint256 i = 0; i < numberOfCampaign; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}