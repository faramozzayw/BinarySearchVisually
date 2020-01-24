import React, { useCallback, useRef } from "react";

import useStoreon from "storeon/react";

import ErrorButton from "./Buttons/ErrorButton";
import SearchButton from "./Buttons/SearchButton";

import { arrayHelp } from "./../utils/consts";

const Form = () => {
	const inputRef = useRef(null);
	const { dispatch, inputError } = useStoreon("input", "inputError");

	const updateInput = useCallback(() => {
		dispatch("updateInput", inputRef.current.value);
	});

	const onSubmit = e => {
		e.preventDefault();
		console.log("on submit");
	};

	const Button = () =>
		inputError ? <ErrorButton /> : <SearchButton onSubmit={onSubmit} />;

	return (
		<form onSubmit={onSubmit}>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						ref={inputRef}
						type="text"
						className={`input is-${
							inputError ? "danger" : "primary"
						} is-medium`}
						placeholder="Input your array"
						name="arrayInput"
						onChange={updateInput}
						required
						// autoFocus
					/>
					<p className="help" data-error={inputError.toString()}>
						{arrayHelp[inputError ? "isNan" : "isOk"]}
					</p>
				</div>
			</div>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						name="keyInput"
						type="text"
						className="input is-info is-medium"
						placeholder="Input your key"
						required
					/>
					<p className="help">Mock</p>
				</div>
			</div>
			<Button />
		</form>
	);
};

export default Form;
