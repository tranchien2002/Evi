pragma solidity >=0.5.0 <0.6.0;

import "chainlink/v0.5/contracts/ChainlinkClient.sol";
import "chainlink/v0.5/contracts/vendor/Ownable.sol";
import {
    SafeMath as SafeMath_Chainlink
} from "chainlink/v0.5/contracts/vendor/SafeMath.sol";

contract Evi is ChainlinkClient, Ownable {
    using SafeMath_Chainlink for uint256;
    uint256 constant private ORACLE_PAYMENT = 1 * LINK;
    bool public expired = false;
    bool public paid = false;

    address public buyer;
    string  public insuranceId;
    uint256 public price;
    uint256 public insuranceType;
    uint256 public startingTime;
    uint256 public endingTime;
    uint256 public deploymentTime;


    event successNodeResponse(
      bool success
    );

    constructor(
      address _buyer,
      string memory _insuranceId,
      uint256 _price,
      uint256 _insuranceType,
      uint256 _startingTime,
      uint256 _endingTime,
      string memory _jobId,
      address _oracle,
      address _link ) public payable {

      buyer = _buyer;
      insuranceId = _insuranceId;
      price = _price;
      insuranceType = _insuranceType;
      startingTime = _startingTime;
      endingTime = _endingTime;
      deploymentTime = block.timestamp;

      if (_link == address(0)) {
        setPublicChainlinkToken();
        setChainlinkOracle(_oracle);
      } else {
        setChainlinkToken(_link);
        setChainlinkOracle(_oracle);
      }
    }

    modifier buyerContract(){
        require(address(this) == msg.sender || buyer == msg.sender,"Unauthorised , must be buyer");
        _;
    }

    function fulfillNodeRequest(bytes32 _requestId, bool paid) public recordChainlinkFulfillment(_requestId) {
        emit successNodeResponse(true);
    }

}
