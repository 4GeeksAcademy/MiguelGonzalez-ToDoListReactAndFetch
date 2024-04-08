const createTask = (task) => {
    return (
        fetch(`https://playground.4geeks.com/todo/todos/miguel`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => {
            if(res.status !== 201) {
                console.log('There has been an error creating task')
            } else return res.json();
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    )
}

export default createTask;