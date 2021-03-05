import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: 'Order',
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
