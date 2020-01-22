import createStore from "storeon";

const separator = ",";

const input = store => {
	store.on("@init", () => ({ input: null, key: null }));

	store.on("updateInput", (state, input) => {
		return {
			...state,
			input: input.split(separator).filter(elem => elem !== ""),
		};
	});
};

export const store = createStore([input]);
