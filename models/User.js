import mongoose from 'mongoose';
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
    collection: 'User',
  }
);

// const postCodeValidator = validate({
//   validator: 'isPostcode',
//   arguments: ['AU', validator.loca],
//   message: 'Please enter a valid postcode.',
// });

const User = mongoose.model('User', userSchema);

export default User;

// code: {
// type: String,
// required: [true, 'Code required'],
// //sync validation
// validate: {
// validator: function (v) {
// //regex product code must have XXXX-XXXX-XXXX format
// //return true to pass the validation
// //return false to fail the validation
// return (/\d{4}-\d{4}-\d{4}/.test(v));
// },
// //message to return if validation fails
// message: props => `${props.value} is not a valid code format!`
// },
// required: [true, 'Code required']
// }
