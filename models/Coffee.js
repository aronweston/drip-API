import mongoose from 'mongoose';
const { Schema } = mongoose;

const coffeeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tastesLike: {
      type: Array,
      required: true,
    },
    grams: {
      type: Number,
      required: true,
      default: 250,
    },
    stockQty: {
      type: Number,
      required: true,
      default: 0,
    },
    roaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roaster',
    },
  },
  {
    timestamps: true,
    collection: 'Coffee',
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema);

export default Coffee;
