import React from "react";

import useStoreon from "storeon/react";

import ErrorButton from "./Buttons/ErrorButton";
import SearchButton from "./Buttons/SearchButton";

import KeyField from "./KeyField";
import ArrayField from "./ArrayField";

import delay from "delay";

const Form = () => {
	const { dispatch, input, globalError, key } = useStoreon(
		"input",
		"globalError",
		"key",
	);

	const delayTime = 1000;
	const failResult = -1;

	async function* binarySearch(arr, key, start = 0, end = arr.length - 1) {
		if (end < start) {
			return failResult;
		}

		const mid = Math.floor((start + end) / 2);
		dispatch("changeCurrent", mid);

		await delay(delayTime);

		if (key === arr[mid]) {
			yield mid;
		} else if (arr[mid] > key) {
			dispatch("changeRight", mid);
			yield* binarySearch(arr, key, start, mid - 1);
		} else if (arr[mid] < key) {
			dispatch("changeLeft", mid);
			yield* binarySearch(arr, key, mid + 1, end);
		} else {
			throw new TypeError("Unexpected comparison error, NaN may be found");
		}
	}

	const onSubmit = async e => {
		e.preventDefault();

		const gener = binarySearch(input, key);
		let result = -1;

		for await (let value of gener) {
			result = value;
		}

		console.log(result);

		dispatch("setResult", result);
		dispatch("$toDefaultIndex");
	};

	const Button = () =>
		globalError ? <ErrorButton /> : <SearchButton onSubmit={onSubmit} />;

	return (
		<form onSubmit={onSubmit}>
			<ArrayField />
			<KeyField />
			<Button />
		</form>
	);
};

export default Form;
