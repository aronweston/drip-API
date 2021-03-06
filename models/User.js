import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
// import validate from 'mongoose-validator';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      minlength: [6, 'Minimum length of email must be 6 characters'],
      unique: [true, 'Email already exists. Please try another email'],
      match: /.+\@.+\..+/,
      required: true,
    },
    password: {
      type: String,
      minlength: [6, 'Minimum length of password must be 6 characters'],
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    billing: {
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      address_line_1: {
        type: String,
        required: false,
      },
      address_line_2: {
        type: String,
        required: false,
      },
      suburb: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        // enum: ['NSW', 'QLD', 'ACT', 'NT', 'WA', 'TAS'],
        required: false,
      },
      postCode: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.checkPassword = async function (candidate) {
  try {
    return await bcrypt.compare(candidate, this.password);
  } catch (err) {
    console.log(error);
  }
};

//HASH PASSWORD
userSchema.pre('save', async function (next) {
  //only hash the password if the password is being changed
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
