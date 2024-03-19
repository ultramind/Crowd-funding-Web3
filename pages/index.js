import React, { useContext, useState, useEffect } from "react";

import { CrowdingFundingContext } from "../Context/CrowdFunding";
import { Card, Hero, PupUp } from "../Components";

const index = () => {
  const {
    titleData,
    createCampaign,
    getCampaign,
    getUserCampaign,
    getDonations,
    donate,
  } = useContext(CrowdingFundingContext);

  const [allCampaign, setAllCampaign] = useState([]);
  const [userCampaign, setUserCampaign] = useState([]);

  useEffect(() => {
    // const getAllCampaignData = getCampaign();
    // console.log(getAllCampaignData);
    // const getUserCampaignData = getUserCampaign();

    return async () => {
      // const getAllData = await getAllCampaignData;
      // const getUserData = await getUserCampaignData;
      // setAllCampaign(getAllData);
      // setUserCampaign(getUserData);
    };
  }, []);

  // modal
  const [openModal, setOpenModal] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  // console.log(donateCampaign);

  return (
    <>
      <Hero title={titleData} createCampaign={createCampaign} />

      <Card
        title="All listed campaign"
        allCampaign={allCampaign}
        setOpenModal={setOpenModal}
        setDonate={setDonateCampaign}
      />

      <Card
        title="Your created campaign"
        allCampaign={userCampaign}
        setOpenModal={setOpenModal}
        setDonate={setDonateCampaign}
      />

      {openModal && (
        <PupUp
          setOpenModal={setOpenModal}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default index;
