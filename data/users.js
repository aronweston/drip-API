import bcrypt from 'bcryptjs';

const users = [
  {
    email: 'admin@test.com',
    password: bcrypt.hashSync('chicken', 10),
    isAdmin: true,
    billing: {
      firstName: 'John',
      lastName: 'Smith',
      phone: '0422611910',
      address_line_1: '1 Fake Street',
      address_line_2: '',
      suburb: 'Sydney',
      state: 'NSW',
      postCode: '2005',
    },
  },
  {
    email: 'test1@test.com',
    password: bcrypt.hashSync('chicken', 10),
    isAdmin: false,
    billing: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      address_line_1: '1 Fake Street',
      address_line_2: '',
      suburb: 'Sydney',
      state: 'NSW',
      postCode: '2005',
    },
  },
  {
    email: 'test2@test.com',
    password: bcrypt.hashSync('chicken', 10),
    isAdmin: false,
    billing: {
      firstName: 'Gary',
      lastName: 'Oldman',
      phone: '0422611910',
      address_line_1: '1 Fake Street',
      address_line_2: '',
      suburb: 'Sydney',
      state: 'NSW',
      postCode: '2005',
    },
  },
];

export default users;
