import mongoose from 'mongoose';
const { Schema } = mongoose;

const roasterSchema = new Schema(
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
    coffee: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: 'Roaster',
  }
);

const Roaster = mongoose.model('Roaster', roasterSchema);

export default Roaster;
