import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
	throw redirect(303, "/hello");
}