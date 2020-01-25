import React from "react";

import useStoreon from "storeon/react";

import ErrorButton from "./Buttons/ErrorButton";
import SearchButton from "./Buttons/SearchButton";

import KeyField from "./KeyField";
import ArrayField from "./ArrayField";

const Form = () => {
	const { globalError } = useStoreon("input", "globalError");

	const onSubmit = e => {
		e.preventDefault();
		console.log("on submit");
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
