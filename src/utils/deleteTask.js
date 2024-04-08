const deleteTask = (todoId) => {
    return (
        fetch(`https://playground.4geeks.com/todo/api/v1/todo/${todoId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => {
            if(res.status !== 204) { 
                console.log('There has been an error deleting task');
            } else {
                console.log('Task deleted successfully');
            }
        })
        .catch(error => console.log('Error:', error))
    );
};

export default deleteTask;
