import React, { useCallback, useRef, useState } from "react";

import useStoreon from "storeon/react";

const Form = () => {
	const inputRef = useRef(null);
	const { dispatch } = useStoreon("input");

	const updateInput = useCallback(() =>
		dispatch("updateInput", inputRef.current.value),
	);

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
			<button className="button is-success is-medium" type="button">
				Start search
			</button>
		</form>
	);
};

export default Form;
