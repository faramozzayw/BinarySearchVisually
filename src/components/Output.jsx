import React from "react";

import useStoreon from "storeon/react";
import { isGoodResult } from "./../utils/predicates";

const createText = (result, input, key) => {
	if (isGoodResult(result)) {
		return `The key '${key}' was found at the ${result} index of the array '[${input.join(
			", ",
		)}]'`;
	} else {
		return `The key '${key}' wasn't found of the array '[1,2,3,4]' '[${input.join(
			", ",
		)}]'`;
	}
};

const Output = () => {
	const { input, result, key } = useStoreon("input", "result", "key");

	if (Number.isNaN(result)) {
		return null;
	}

	const text = createText(result, input, key);

	if (isGoodResult(result)) {
		return (
			<article class="message is-success is-large">
				<div class="message-header">
					<p>Success 😃</p>
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
