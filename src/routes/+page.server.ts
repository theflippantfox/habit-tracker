import { addUser } from '$lib/core/server/data'
import { redirect, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const { username } = Object.fromEntries(await request.formData())

        addUser(String(username))
        cookies.set('username', String(username), { path: '/' })

        throw redirect(303, '/home')
    }
}
