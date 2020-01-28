import React from "react";
import PropTypes from "prop-types";

import useStoreon from "storeon/react";

const Array = ({ header = "Your array: " }) => {
	const {
		input,
		globalError,
		currentIndex,
		left,
		right,
		result,
		showResult,
	} = useStoreon(
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
		const separator = " ";
		let className = "array-item".concat(separator);

		if (i === currentIndex) {
			className = className.concat("active");
		} else if (i <= left) {
			className = className.concat("left");
		} else if (i >= right) {
			className = className.concat("right");
		} else if (i === result && showResult) {
			className = className.concat("result");
		}

		return (
			<li key={i} className={className}>
				{el.toString()}
			</li>
		);
	});

	return (
		<section className={`array ${globalError ? "error" : ""}`}>
			<h3 className="array-header">{header}</h3>
			<ul className="array-box">{list}</ul>
		</section>
	);
};

Array.propTypes = {
	header: PropTypes.string,
};

export default Array;
