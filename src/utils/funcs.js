export const checkInputError = rawInput => {
	let unexpectedSymbol = /[^,.\s\d\w]/;
	let unexpectedWords = /[a-zа-яё]/i;

	if (unexpectedWords.test(rawInput)) {
		return "isUnexpectedWords";
	} else if (unexpectedSymbol.test(rawInput)) {
		return "isUnexpectedSymbol";
	} else {
		return "isNaN";
	}
};

export const chechArrayError = array => {
	return array.includes(NaN);
};
