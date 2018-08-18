pragma solidity ^0.4.18;

contract GZBTOKEN {
    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    string public constant name = "GAZPROMBANK";
    string public constant symbol = "GZB";
    uint8 public constant decimals = 0;

    function GZBTOKEN() public {
      balanceOf[msg.sender] = 1000000;
    }

    /* Send coins */
   function transfer(address _to, uint256 _value) public {
     require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
     require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
     balanceOf[msg.sender] -= _value;                    // Subtract from the sender
     balanceOf[_to] += _value;                           // Add the same to the recipient
   }
}

