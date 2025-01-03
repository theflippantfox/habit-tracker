import {addHabit, type Habit} from '$lib/core/server/data.ts'

export const actions = {
    default: async ({request, cookies}) => {
        const {name, description, goal, category, reps, icon, color} = Object.fromEntries(await request.formData())

        const habit =  {
            name: String(name), 
            description: String(description), 
            goal: String(goal), 
            category: String(category), 
            reps: Number(reps), 
            icon: String(icon), 
            color: String(color)
        }

        const username = cookies.get('username')
        if(username !== undefined ) {
            addHabit(username, habit)
        }
    }
}