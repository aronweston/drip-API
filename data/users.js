import bcrypt from 'bcryptjs';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const admin = await stripe.customers.create({ email: 'admin@test.com' });
const john = await stripe.customers.create({ email: 'test@test.com' });
const jill = await await stripe.customers.create({ email: 'test2@test.com' });

const users = [
  {
    name: 'Admin',
    email: 'admin@test.com',
    stripeId: admin.id,
    password: bcrypt.hashSync('chicken', 10),
    isAdmin: true,
    billing: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      line_1: '1 Fake Street',
      line_2: '',
      suburb: 'Sydney',
      postCode: '2005',
      state: 'NSW',
    },
    delivery: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      line_1: '1 Fake Street',
      line_2: '',
      suburb: 'Sydney',
      state: 'NSW',
      postCode: '2005',
    },
  },
  {
    name: 'John',
    email: 'test@test.com',
    stripeId: john.id,
    password: bcrypt.hashSync('chicken', 10),
    isAdmin: false,
    billing: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      line_1: '1 Fake Street',
      line_2: '',
      suburb: 'Sydney',
      postCode: '2005',
      state: 'NSW',
    },
    delivery: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      line_1: '1 Fake Street',
      line_2: '',
      suburb: 'Sydney',
      state: 'NSW',
      postCode: '2005',
    },
  },
  {
    name: 'Jill',
    email: 'test2@test.com',
    stripeId: jill.id,
    password: bcrypt.hashSync('chicken', 10),
    isAdmin: false,
    billing: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      line_1: '1 Fake Street',
      line_2: '',
      suburb: 'Sydney',
      postCode: '2005',
      state: 'NSW',
    },
    delivery: {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '0422611910',
      line_1: '1 Fake Street',
      line_2: '',
      suburb: 'Sydney',
      state: 'NSW',
      postCode: '2005',
    },
  },
];

export default users;
