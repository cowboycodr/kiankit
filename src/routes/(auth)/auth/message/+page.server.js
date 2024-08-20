export const load = async (event) => {
	const { url } = event;

	const method = url.searchParams.get('message') || 'email';

	let message;
	let instructions;

	if (method === 'email') {
		message = 'Confirm your email.';
		instructions = 'Check your inbox for a message from us. Then click the link that is attached.';
	} else if (method === 'reset-request') {
		message = 'Reset your password.';
		instructions = 'Check your inbox for a message from us. Then click the link that is attached.';
	} else if (method === 'reset-password') {
		message = 'Password successfully reset.';
		instructions = 'You are now able to log in with this new password.';
	}

	const pageMetaTags = Object.freeze({
		title: 'Confirmation'
	});

	return {
		message,
		instructions,
		pageMetaTags
	};
};
