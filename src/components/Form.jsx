import React, { useCallback, useRef } from "react";

import useStoreon from "storeon/react";

import ErrorButton from "./Buttons/ErrorButton";
import SearchButton from "./Buttons/SearchButton";

import { arrayHelp, keyHelp } from "./../utils/consts";

const Form = () => {
	const inputRef = useRef(null);
	const keyRef = useRef(null);

	const { dispatch, arrayError, keyError, globalError } = useStoreon(
		"input",
		"arrayError",
		"keyError",
		"globalError",
	);

	const updateInput = useCallback(() => {
		dispatch("updateInput", inputRef.current.value);
	});

	const updateKey = useCallback(() => {
		dispatch("updateKey", keyRef.current.value);
	});

	const onSubmit = e => {
		e.preventDefault();
		console.log("on submit");
	};

	const Button = () =>
		globalError ? <ErrorButton /> : <SearchButton onSubmit={onSubmit} />;

	return (
		<form onSubmit={onSubmit}>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						ref={inputRef}
						type="text"
						className={`input is-${
							arrayError ? "danger" : "primary"
						} is-medium`}
						placeholder="Input your array"
						name="arrayInput"
						onChange={updateInput}
						required
						// autoFocus
					/>
					<p className="help" data-error={arrayError.toString()}>
						{arrayHelp[arrayError ? "isNan" : "isOk"]}
					</p>
				</div>
			</div>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						ref={keyRef}
						name="keyInput"
						type="text"
						className={`input is-${keyError ? "danger" : "info"} is-medium`}
						placeholder="Input your key"
						required
						onChange={updateKey}
					/>
					<p className="help" data-error={keyError.toString()}>
						{keyHelp[keyError ? "isNan" : "isOk"]}
					</p>
				</div>
			</div>
			<Button />
		</form>
	);
};

export default Form;
