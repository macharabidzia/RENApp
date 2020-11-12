import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Giorgi TaxiDriverashvili',
    email: 'iogadagiorga@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Vakhtang Gvariani',
    email: 'gvaramia@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];
export default users;
