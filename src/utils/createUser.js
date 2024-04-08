const createUser = () => {
    return (
        fetch(`https://playground.4geeks.com/todo/users/miguel`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify([])
        })
        .then(res => {
            if(res.status !== 202) {
                console.log('There has been an error creating user')
            } else return res.json();
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    )
}

export default createUser;