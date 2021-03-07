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
    token: {
      type: String,
    },
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
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
