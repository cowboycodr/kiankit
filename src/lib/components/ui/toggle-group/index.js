import { getContext, setContext } from "svelte";
import Root from "./toggle-group.svelte";
import Item from "./toggle-group-item.svelte";
export function setToggleGroupCtx(props) {
	setContext("toggleGroup", props);
}
export function getToggleGroupCtx() {
	return getContext("toggleGroup");
}
export {
	Root,
	Item,
	//
	Root as ToggleGroup,
	Item as ToggleGroupItem,
};
