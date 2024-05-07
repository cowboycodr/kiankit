import { redirect } from '@sveltejs/kit';

export const signInWithGoogle = async (event) => {
    const { url, locals: { supabase } } = event;

    const next = url.searchParams.get('next') || '/';

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            redirectTo: `${url.origin}/auth/callback?next=${encodeURIComponent(next)}`
        }
    })

    if (error) {
        return { error };
    }

    throw redirect(303, data.url)
}