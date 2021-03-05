import mongoose from 'mongoose';
const { Schema } = mongoose;

const coffeeSchema = new Schema(
  {
    roaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roaster',
      required: [true, 'A roaster is required'],
    },
    title: {
      type: String,
      required: [true, 'A product title is required'],
    },
    price: {
      type: Number,
      required: [true, 'A product price is required'],
    },
  },
  {
    timestamps: true,
    collection: 'Coffee',
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema);

export default Coffee;
