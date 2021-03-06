import mongoose from 'mongoose';
const { Schema } = mongoose;

const coffeeSchema = new Schema(
  {
    roaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roaster',
    },
    title: {
      type: String,
      required: [true, 'A product title is required'],
    },
    price: {
      type: Number,
      required: [true, 'A product price is required'],
    },
    stockQty: {
      type: Number,
      required: [true, 'A product qty is required'],
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: 'Coffee',
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema);

export default Coffee;
