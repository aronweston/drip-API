import colors from 'colors';
import User from './models/User.js';
import users from './data/users.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import Roaster from './models/Roaster.js';
import roasters from './data/roasters.js';
import Coffee from './models/Coffee.js';
import coffees from './data/coffee.js';
import Order from './models/Order.js';
dotenv.config();
connectDB();

const seedData = async () => {
  try {
    //destroy all data before seeding
    // await User.deleteMany();
    // await Roaster.deleteMany();
    await Coffee.deleteMany();
    // await Order.deleteMany();

    // await User.insertMany(users);
    // await Roaster.insertMany(roasters);
    await Coffee.insertMany(coffees);

    console.log('Seed successful'.green.inverse);
    process.exit(); // exit no error;
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); //exit the event loop with 1 = error
  }
};

seedData();

export default seedData;
