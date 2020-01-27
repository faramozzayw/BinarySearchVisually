import React from "react";

import useStoreon from "storeon/react";

const Array = ({ header = "Your array: " }) => {
	const { input, globalError, currentIndex, left, right, result, showResult } = useStoreon(
		"input",
		"globalError",
		"currentIndex",
		"left",
		"right",
		"result",
		"showResult", 
	);

	if (!input || input.length === 0) {
		return null;
	}

	const list = input.map((el, i) => {
		let className = "array-item";

		if (i === currentIndex) {
			className += " active";
		} else if (i <= left) {
			className += " left";
		} else if (i >= right) {
			className += " right";
		} else if (i === result && showResult) {
			className += " result";
		}

		return (
			<li key={i} className={className}>
				{el.toString()}
			</li>
		);
	});

	return (
		<section className={`array ${globalError ? "error" : ""}`}>
			<h3 className="array-header" >{header}</h3>
			<ul className="array-box">{list}</ul>
		</section>
	);
};

export default Array;
