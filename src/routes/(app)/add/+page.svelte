<script>
    var newHabit = {
        name: '',
        description: '',
        goal: '',
        category: '',
        reps: 1,
        icon: '',
        color: '',
    }

    const handleSubmit = () => {
        console.log(newHabit)
    }    
</script>

<form on:submit|preventDefault = {handleSubmit}>
    <input placeholder="name" bind:value={newHabit.name}/>
    <input placeholder="description"  bind:value={newHabit.description}/>
    <input placeholder="goal"  bind:value={newHabit.goal}/>
    <input placeholder="category"  bind:value={newHabit.category}/>
    <input placeholder="completions per day"  bind:value={newHabit.reps}/>
    <input placeholder="icon"  bind:value={newHabit.icon}/>
    <input placeholder="color"  bind:value={newHabit.color}/>

    <button type="submit">Add</button>
</form>