import React, { useCallback, useRef } from "react";

import useStoreon from "storeon/react";

const Form = () => {
	const inputRef = useRef(null);
	const { dispatch, input } = useStoreon("input");

	const updateinput = useCallback(() => {
		dispatch("updateInput", inputRef.current.value);
	});

	return (
		<form>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<input
						ref={inputRef}
						type="text"
						className="input is-primary is-medium"
						placeholder="TODO"
					/>
				</div>
			</div>
			<button
				className="button is-primary is-medium"
				type="button"
				onClick={updateinput}
			>
				Test {input}
			</button>
		</form>
	);
};

export default Form;
