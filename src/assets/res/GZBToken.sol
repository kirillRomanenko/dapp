pragma solidity ^0.4.18;

contract GZBTOKEN {
    
    mapping (address => uint256) public balanceOf;

    string public constant name = "GAZPROMBANK";
    string public constant symbol = "GZB";
    uint8 public constant decimals = 0;

    function GZBTOKEN() public { balanceOf[msg.sender] = 1000000;}

    // отправка токенов 
   function transfer(address _to, uint256 _value) public {
     require(balanceOf[msg.sender] >= _value);           
     require(balanceOf[_to] + _value >= balanceOf[_to]); 
     balanceOf[msg.sender] -= _value;                    
     balanceOf[_to] += _value;                          
}
}

