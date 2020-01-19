import React from "react";

const Array = ({ data = [1, 2, 3, 4, 5], header = "Your array: " }) => {
	const list = data.map((el, i) => {
		return <li key={i}>{el}</li>;
	});

	return (
		<section className="array">
			<h3>{header}</h3>
			<ul>{list}</ul>
		</section>
	);
};

export default Array;
