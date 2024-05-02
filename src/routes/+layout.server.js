export const load = async ({ locals: { safeGetSession } }) => {
	const { session, user } = await safeGetSession();

	return {
		session,
		user
	};
};
