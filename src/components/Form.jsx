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

	async function* binarySearch(arr, key, start = 0, end = arr.length - 1) {
		if (end < start) {
			yield -1;
		}

		const mid = Math.floor((start + end) / 2);

		dispatch("changeCurrent", mid);
		console.info("call");

		await delay(delayTime);

		if (key === arr[mid]) {
			console.warn(mid);
			yield mid;
		} else if (arr[mid] > key) {
			yield* binarySearch(arr, key, start, mid - 1);
		} else if (arr[mid] < key) {
			yield* binarySearch(arr, key, mid + 1, end);
		} else {
			throw new TypeError("Unexpected comparison error, NaN may be found");
		}
	}

	const onSubmit = async e => {
		e.preventDefault();

		const gener = binarySearch(input, key);

		for await (let _ of gener) {
			console.log(_);
		}

		dispatch("changeCurrent", -1);
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
