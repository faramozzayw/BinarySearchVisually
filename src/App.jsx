import React from "react";

import Array from "./components/Array";
import Form from "./components/Form";
import Output from "./components/Output";

export default () => {
	return (
		<main className="App">
			<Form />
			<Array />
			<Output />
		</main>
	);
};
