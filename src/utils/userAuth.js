export const authenticateUser = (username, password) => {

    const users = [
        { username: "admin", password: "admin", role: "Admin" },
        { username: "user", password: "user", role: "User" },
    ];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        return user.role;
    }

    return null;
    
};


export default authenticateUser