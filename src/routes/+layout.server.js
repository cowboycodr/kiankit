export const load = async (event) => {
	const {
		locals: { safeGetSession }
	} = event;
	const { session, user } = await safeGetSession();

	return {
		session,
		user
	};
};
