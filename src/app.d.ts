// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { SupabaseClient, Session, User } from '@supabase/supabase-js';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            supabase: SupabaseClient,
            safeGetSession(): Promise<{ session: Session | null; user: User | null }>
        }
        interface PageData {
            session: Session | null
            user: User | null
        }
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
