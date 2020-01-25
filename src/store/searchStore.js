const searchStore = store => {
	store.on("@init", () => ({
		currentIndex: -1,
	}));

	store.on("changeCurrent", (state, currentIndex) => {
		return {
			...state,
			currentIndex,
		};
	});
};

export default searchStore;
