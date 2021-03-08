import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      default: false,
      required: true,
    },
    paidAt: {
      type: String,
    },
    reference: {
      type: String,
    },
    // client_secret: {
    //   type: String,
    //   required: true,
    // },
    cartItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        roaster: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Coffee',
        },
        coffee: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Coffee',
        },
      },
    ],
    billing: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      line_1: {
        type: String,
        required: true,
      },
      line_2: {
        type: String,
        required: false,
      },
      suburb: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        // enum: ['NSW', 'QLD', 'ACT', 'NT', 'WA', 'TAS'],
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
    },
    delivery: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      line_1: {
        type: String,
        required: true,
      },
      line_2: {
        type: String,
        required: false,
      },
      suburb: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        // enum: ['NSW', 'QLD', 'ACT', 'NT', 'WA', 'TAS'],
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
