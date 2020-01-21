import React from "react";

const Array = ({ data = [1, 2, 3, 4, 5, 6], header = "Your array: " }) => {
	if (!data) {
		return null;
	}

	const list = data.map((el, i) => {
		return (
			<li key={i} className={`${i === 3 ? "active" : ""} array-element`}>
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
