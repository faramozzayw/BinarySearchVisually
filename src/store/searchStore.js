const searchStore = store => {
	store.on("@init", () => ({
		currentIndex: null,
	}));

	store.on("changeCurrent", (state, currentIndex) => {
		console.log(currentIndex);
		return {
			...state,
			currentIndex,
		};
	});
};

export default searchStore;
