import React from "react";

import useStoreon from "storeon/react";

const Array = ({ data, header = "Your array: " }) => {
	const { input } = useStoreon("input");

	if (!input || input.length === 0) {
		return null;
	}

	const list = input.map((el, i) => {
		return (
			<li key={i} className={`array-element`}>
				{el}
			</li>
		);
	});

	return (
		<section className="array">
			<h3>{header}</h3>
			<ul>{list}</ul>
		</section>
	);
};

export default Array;
