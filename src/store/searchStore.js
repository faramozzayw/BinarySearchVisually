const searchStore = store => {
	const initialState = {
		currentIndex: -1,
		left: NaN,
		right: NaN,
		result: NaN,
	};

	store.on("@init", () => ({ ...initialState }));

	store.on("changeCurrent", (state, currentIndex) => {
		return {
			...state,
			currentIndex,
		};
	});

	store.on("changeLeft", (state, left) => {
		return {
			...state,
			left,
		};
	});

	store.on("changeRight", (state, right) => {
		return {
			...state,
			right,
		};
	});

	store.on("setResult", (_, result) => {
		return {
			...initialState,
			result,
		};
	});

	store.on("$toDefault", () => ({ ...initialState }));
	store.on("$toDefaultIndex", state => ({
		...initialState,
		result: state.result,
	}));
};

export default searchStore;
