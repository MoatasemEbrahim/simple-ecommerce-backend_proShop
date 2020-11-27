import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@me.com',
        password: bcrypt.hashSync('admin'),
        isAdmin: true
    },
    {
        name: 'User1',
        email: 'user1@me.com',
        password: bcrypt.hashSync('123456'),
    },
    {
        name: 'User2',
        email: 'user2@me.com',
        password: bcrypt.hashSync('123456'),
    },
]

export default users;
