function UserList(){
    const users = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
    ]

    return(
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.age} years old</li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;