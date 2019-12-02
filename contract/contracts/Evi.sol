pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;

import "chainlink/v0.5/contracts/ChainlinkClient.sol";
import "chainlink/v0.5/contracts/vendor/Ownable.sol";
import {
    SafeMath as SafeMath_Chainlink
} from "chainlink/v0.5/contracts/vendor/SafeMath.sol";

contract Evi is ChainlinkClient, Ownable {
    using SafeMath_Chainlink for uint256;

    constructor(address _link, address _oracle, bytes32 _jobId) public {
      if (_link == address(0)) {
        setPublicChainlinkToken();
        setChainlinkOracle(_oracle);
      } else {
        setChainlinkToken(_link);
        setChainlinkOracle(_oracle);
      }
    }

    /**
     * @notice Creates a request to the specified Oracle contract address
     * @dev This function ignores the stored Oracle contract address and
     * will instead send the request to the address specified
     * @param _url The URL to fetch data from
     * @param _path The dot-delimited path to parse of the response
     * @param _callbackFn The callback function to call once request is processed
     */
    function createRequestTo(
        string memory _url,
        string memory _path,
        bytes4 _callbackFn
    ) private returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            _callbackFn
        );
        req.add("url", _url);
        req.add("path", _path);
        requestId = sendChainlinkRequest(req, payment);
    }

    function() external payable {}

}
