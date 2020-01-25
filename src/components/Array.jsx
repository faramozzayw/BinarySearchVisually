import React from "react";

import useStoreon from "storeon/react";

const Array = ({ header = "Your array: " }) => {
	const { input, globalError, currentIndex } = useStoreon(
		"input",
		"globalError",
	);

	if (!input || input.length === 0) {
		return null;
	}

	const list = input.map((el, i) => {
		return (
			<li
				key={i}
				className={`array-item ${i === currentIndex ? "active" : ""}`}
			>
				{el.toString()}
			</li>
		);
	});

	return (
		<section className={`array ${globalError ? "error" : ""}`}>
			<h3>{header}</h3>
			<ul className="array-box">{list}</ul>
		</section>
	);
};

export default Array;
