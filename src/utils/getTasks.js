const getTasks = () => {
    return (
        fetch(`https://playground.4geeks.com/todo/users/miguel`)
        .then(res => {
            if(res.status !== 200) {
                console.log('There has been an error getting tasks')
            } else return res.json();
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    )
}

export default getTasks;