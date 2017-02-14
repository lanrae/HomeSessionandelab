
  function reverseString(str) {
	//aplit the string wherever there's reverse the string
	if(str == '') {
		return null;
	} else {
	 	var result = str.split('').reverse().join('');
		if(result == str)
			return true;
		return result;
	}
};

module.exports = reverseString;
