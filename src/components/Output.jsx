import React from "react";

import useStoreon from "storeon/react";
import { isPositiveResult } from "./../utils/predicates";

const createText = (result, input, key) => {
	if (isPositiveResult(result)) {
		return `The key '${key}' was found at the ${result} index of the array '[${input.join(
			", ",
		)}]'`;
	} else {
		return `The key '${key}' wasn't found of the array '[${input.join(
			", ",
		)}]'`;
	}
};

const Output = () => {
	const { input, result, key, showResult } = useStoreon("input", "result", "key", "showResult");

	if (!showResult) {
		return null;
	}

	const text = createText(result, input, key);

	if (isPositiveResult(result)) {
		return (
			<article class="message is-success is-large">
				<div class="message-header">
					<p>Success 🦄✨😃</p>
				</div>
				<div class="message-body has-text-left ">{text}</div>
			</article>
		);
	} else {
		return (
			<article class="message is-danger is-large">
				<div class="message-header">
					<p>Wasted 😭</p>
				</div>
				<div class="message-body has-text-left">{text}</div>
			</article>
		);
	}
};

export default Output;
