export const load = async (event) => {
	const { url } = event;

	const method = url.searchParams.get('method') || 'email';

	let message;
	let instructions;

	if (method === 'email') {
		message = 'Confirm your email.';
		instructions = 'Check your inbox for a message from us, and click the link that is attached.';
	}

	return {
		message,
		instructions
	};
};
