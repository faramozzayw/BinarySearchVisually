import { isEmptyString } from "./../utils/predicates";

import { separator } from "./../utils/consts";

const inputStore = store => {
	store.on("@init", () => ({
		input: null,
		key: null,
		arrayError: false,
		keyError: false,
		globalError: false,
	}));

	store.on("updateInput", (state, _input) => {
		const input = _input
			.split(separator)
			.map(elem => elem.trim())
			.filter(elem => !isEmptyString(elem))
			.map(Number);

		const arrayError = input.includes(NaN);
		const globalError = state.keyError || arrayError;

		return {
			...state,
			input,
			arrayError,
			globalError,
		};
	});

	store.on("updateKey", (state, _key) => {
		const key = Number(_key);
		const keyError = Number.isNaN(key) || !Number.isFinite(key);
		const globalError = state.arrayError || keyError;

		return {
			...state,
			key,
			keyError,
			globalError,
		};
	});
};

export default inputStore;
