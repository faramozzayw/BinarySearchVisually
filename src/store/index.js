import createStore from "storeon";

import inputStore from "./inputStore";
import searchStore from "./searchStore";

export const store = createStore([inputStore, searchStore]);
