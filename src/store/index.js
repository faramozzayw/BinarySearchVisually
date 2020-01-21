import createStore from "storeon";

const input = store => {
	store.on("@init", () => ({ input: null }));

	store.on("updateInput", (state, input) => {
		return {
			...state,
			input,
		};
	});
};

export const store = createStore([input]);
