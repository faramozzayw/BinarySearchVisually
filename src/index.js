import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "storeon/react/context";

import "./styles.css";
import "bulma/css/bulma.css";

import App from "./App";

import { store } from "./store/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider value={store}>
		<App />
	</Provider>,
	rootElement,
);
