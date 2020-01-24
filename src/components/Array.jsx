import React from "react";

import useStoreon from "storeon/react";

const Array = ({ header = "Your array: " }) => {
	const { input, inputError } = useStoreon("input", "inputError");

	if (!input || input.length === 0) {
		return null;
	}

	const list = input.map((el, i) => {
		return (
			<li key={i} className={`array-item`}>
				{el}
			</li>
		);
	});

	return (
		<section className={`array ${inputError ? "error" : ""}`}>
			<h3>{header}</h3>
			<ul className="array-box">{list}</ul>
		</section>
	);
};

export default Array;
