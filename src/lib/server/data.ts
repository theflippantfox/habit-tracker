import { v4 as uuid } from 'uuid'

interface Data {
    users: User[]
}

interface User {
    username: string
    habits: Habit[]
}

interface Habit {
    id?: string
    name: string
    description: string
    goal: string
    category: string
    reps: number
    icon: string
    color: string
}

const data: Data = {
    users: []
}

export const addUser = (username: string) => {
    const newuser = {
        username: username,
        habits: []
    }
    data.users.push(newuser)
}

export const addHabit = (username: string, habit: Habit) => {
    habit = {
        id: uuid(),
        ...habit
    }

    const useridx = data.users.findIndex((user) => { return user.username === username })

    data.users[useridx].habits.push(habit)
}

export const fetchUser = (username: string): User | undefined => {
    return data.users.find((user) => { return user.username === username })
}
