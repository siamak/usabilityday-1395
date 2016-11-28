function PersianNum(value) {
	let nVal = value.toString();
	const enNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const FaNum = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];

	for (let i = 0, numbersLen = enNum.length; i < numbersLen; i++) {
		nVal = nVal.replace(new RegExp(enNum[i], 'g'), FaNum[i]);
	}
	return nVal;
}

export default PersianNum;
