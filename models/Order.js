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
      required: true,
      default: 0.0,
    },
    cartItems: [
      {
        title: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        coffee: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Coffee',
        },
      },
    ],
  },
  {
    timestamps: true,
    collection: 'Order',
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
