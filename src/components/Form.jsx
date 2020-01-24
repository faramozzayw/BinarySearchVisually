import React, { useCallback, useRef } from "react";

import useStoreon from "storeon/react";

const Form = () => {
	const inputRef = useRef(null);
	const { dispatch, inputError } = useStoreon("input", "inputError");

	const updateInput = useCallback(() => {
		dispatch("updateInput", inputRef.current.value);
	});

	const ErrorButton = () => (
		<button className="button is-danger is-medium" disabled>
			Error was found
		</button>
	);

	const SearchButton = () => (
		<button className="button is-success is-medium" type="button">
			Start search
		</button>
	);

	const Button = () => (inputError ? <ErrorButton /> : <SearchButton />);

	return (
		<form>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						ref={inputRef}
						type="text"
						className="input is-primary is-medium"
						placeholder="Input your array"
						onChange={updateInput}
					/>
				</div>
			</div>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						type="text"
						className="input is-info is-medium"
						placeholder="Input your key"
					/>
				</div>
			</div>
			<Button />
		</form>
	);
};

export default Form;
