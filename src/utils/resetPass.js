export const resetPassword = (username, password) => {
    const users = [
        { username: "admin", password: "admin", role: "Admin" },
        { username: "user", password: "user", role: "User" },
    ];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        return user.password == password;
    }
    
    return null;
};

export default resetPassword