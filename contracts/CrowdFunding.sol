// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign = {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
        
    }

    uint256 numbersOfCampaign = 0;

    mapping (uint256=>Campaign) campaigns;

    // Creating new campaign
    function createCampaign (address _owner, string memory _title, string memory _description, uint256 _target, uint356 _deadline) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaign];

        require(compaign.deadline < block.timestamp, "The dealine should be a date in furture");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;

        numbersOfCampaign ++;

        return numbersOfCampaign -1;
        
    }
    // donate to comapaign
    function donateToCampaign (uint256 _id) public payable {
        uint256 amount msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donation.psuh(amount);

        (bool sent,) = payable(campaign.owner).call{value:amount}(");
        if(sent){
            campaign.amountCollected = campaign.amountCollected + amount
        }
    }

    // geting all donators
    function getDonators (uint256 _id) public view returns (address[] memory, uint256[] memory){
        return (campaigns[_id].donators, campaigns[_id].donation)
    }

    // get campaigns
    function getAllCampaigns () public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numbersOfCampaigns);

        for (uint256 i = 0; i < numbersOfCampaigns; i++) {
            Campaign[] memory item = campaigns[i];
            allCampaigns[i] = item
        }

        return allCampaign;
    }
}