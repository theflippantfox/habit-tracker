import { redirect, type Actions } from '@sveltejs/kit'
import { supabase } from '$lib/server/supabase'

export const actions: Actions = {
    signin: async ({ request, cookies }) => {
        const { email, password } = Object.fromEntries(await request.formData())

        const { data, error } = await supabase.auth.signInWithPassword({
            email: String(email),
            password: String(password)
        })

        if (data.user) {
            console.log(data.user, data.session)
            cookies.set('email', String(data.user.email), { path: '/' })

            throw redirect(303, '/home')
        }

        else {
            return {
                error
            }
        }
    },

    signup: async ({ request, cookies }) => {
        const { email, password } = Object.fromEntries(await request.formData())

        const { data, error } = await supabase.auth.signUp({
            email: String(email),
            password: String(password)
        })

        if (data.user) {
            console.log(data.user, data.session)
            cookies.set('email', String(data.user.email), { path: '/' })

            throw redirect(303, '/home')
        }

        else {
            return {
                error
            }
        }
    }
}
