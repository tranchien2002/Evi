pragma solidity >=0.5.0 <0.6.0;
import "./Evi.sol";

contract EviFactory {
  mapping (address => address[]) public contractsOfBuyer;

    event contractDeployed(
        address Evi
    );

    enum Status { EMPTY, WAITING, COMPENSATED }

    function createEvi(
      string memory _insuranceId,
      uint256 _price,
      uint256 _insuranceType,
      uint256 _startingTime,
      uint256 _endingTime,
      string memory _jobId,
      address _oracle,
      address _link
    ) public payable {
        require(msg.value > _price, "Not Enough Money");
        address packageInsurance = address(new Evi(msg.sender, _insuranceId, _price, _insuranceType, _startingTime, _endingTime , _jobId, _oracle, _link));

        contractsOfBuyer[msg.sender].push(packageInsurance);
        emit contractDeployed(packageInsurance);
    }

    function getAllContract(address _buyer) public view returns(address[] memory) {
        return contractsOfBuyer[_buyer];
    }

}
