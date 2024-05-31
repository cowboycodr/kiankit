import { signInWithGoogle } from './google';
import { signInWithGithub } from './github';
import { signUpWithEmail, signInWithEmail } from './email';
import { authSchema as schema } from '$lib/schemas';

export { signInWithGoogle, signInWithGithub, signUpWithEmail, signInWithEmail, schema };
