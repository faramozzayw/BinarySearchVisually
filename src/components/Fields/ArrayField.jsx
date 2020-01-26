import React, { useRef, useCallback } from "react";

import useStoreon from "storeon/react";

import { arrayHelp } from "./../../utils/consts";

const ArrayField = () => {
	const arrayRef = useRef(null);

	const { dispatch, arrayError } = useStoreon("input", "arrayError");

	const updateInput = useCallback(() => {
		dispatch("updateInput", arrayRef.current.value);
	});

	return (
		<div className="field is-grouped is-grouped-centered">
			<div className="control">
				<input
					ref={arrayRef}
					type="text"
					className={`input is-${arrayError ? "danger" : "primary"} is-medium`}
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
	);
};

export default ArrayField;
