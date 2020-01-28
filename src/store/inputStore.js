import { isEmptyString } from "./../utils/predicates";
import { checkInputError, chechArrayError } from "./../utils/funcs";
import { separator } from "./../utils/consts";

const isOk = "isOk";

const inputStore = store => {
	const initialState = {
		input: null,
		key: null,
		arrayError: false,
		arrayStatus: isOk,
		keyError: false,
		keyStatus: isOk,
		globalError: false,
	};

	store.on("@init", () => ({ ...initialState }));

	store.on("updateInput", (state, rawInput) => {
		const input = rawInput
			.split(separator)
			.map(elem => elem.trim())
			.filter(elem => !isEmptyString(elem))
			.map(Number);

		const arrayError = chechArrayError(input);
		const arrayStatus = arrayError ? checkInputError(rawInput) : isOk;
		const globalError = state.keyError || arrayError;

		return {
			...state,
			input,
			arrayError,
			globalError,
			arrayStatus,
		};
	});

	store.on("updateKey", (state, rawKey) => {
		const key = Number(rawKey);

		const keyError = Number.isNaN(key) || !Number.isFinite(key);
		const keyStatus = keyError ? checkInputError(rawKey) : isOk;
		const globalError = state.arrayError || keyError;

		return {
			...state,
			key,
			keyError,
			globalError,
			keyStatus,
		};
	});
};

export default inputStore;
