import React, { useRef, useCallback } from "react";

import useStoreon from "storeon/react";

import { keyHelp } from "./../utils/consts";

const KeyField = () => {
	const keyRef = useRef(null);

	const { dispatch, keyError } = useStoreon("input", "keyError");

	const updateKey = useCallback(() => {
		dispatch("updateKey", keyRef.current.value);
	});

	return (
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
	);
};

export default KeyField;
