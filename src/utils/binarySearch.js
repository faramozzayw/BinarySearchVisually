const binarySearch = (arr, key, start = 0, end = arr.length - 1) => {
	if (end < start) {
		return -1;
	}

	const mid = Math.floor((start + end) / 2);

	if (key === arr[mid]) {
		return mid;
	} else if (arr[mid] > key) {
		return binarySearch(arr, key, start, mid - 1);
	} else if (arr[mid] < key) {
		return binarySearch(arr, key, mid + 1, end);
	} else {
		throw new TypeError("Unexpected comparison error, NaN may be found");
	}
};

export default binarySearch;
