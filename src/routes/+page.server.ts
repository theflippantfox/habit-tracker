import {addUser} from '$lib/core/server/data.ts'
import {redirect} from '@sveltejs/kit'

export const actions = {
    default: async ({request, cookies}) => {
        const { username } = Object.fromEntries(await request.formData())

        addUser(String(username))
        cookies.set('username', String(username), {path:'/'})

        throw redirect(303, '/home')
    }
}