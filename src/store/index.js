import createStore from "storeon";

const separator = ",";

const input = store => {
	store.on("@init", () => ({ input: null, key: null, inputError: false }));

	store.on("updateInput", (state, _input) => {
		const input = _input
			.split(separator)
			.map(elem => elem.trim())
			.filter(elem => elem !== "")
			.map(Number);

		const inputError = input.includes(NaN);

		return {
			...state,
			input,
			inputError,
		};
	});
};

export const store = createStore([input]);
