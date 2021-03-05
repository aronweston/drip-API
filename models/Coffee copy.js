import mongoose from 'mongoose';
const { Schema } = mongoose;

const coffeeSchema = new Schema(
  {
    roaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'roaster',
    },
    title: {
      type: String,
      required: [true, 'A product title is required'],
    },
    image: {
      type: String,
      required: [true, 'A product image is required'],
    },
    price: {
      type: Number,
      required: [true, 'A product image is required'],
    },
    description: {
      type: String,
      required: true,
    },
    grams: {
      type: Number,
      required: [true, 'Grams is required'],
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    caffeine: {
      type: String,
      enum: ['caf', 'decaf'],
      required: true,
    },
    grindType: {
      type: String,
      enum: ['ground', 'wholeBeans'],
      required: true,
    },
    roaster: {
      name: {
        type: String,
        required: true,
      },
      about: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
    roastLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    region: {
      type: String,
      required: true,
    },
    variety: {
      type: String,
      required: true,
    },
    harvest: {
      type: String,
      required: false,
    },
    altitude: {
      type: String,
      required: false,
    },
    process: {
      type: Array,
      required: false,
    },
    tastesLike: {
      type: Array,
      required: true,
    },
    producer: {
      type: String,
      required: false,
    },
    isBlend: {
      type: Boolean,
      required: false,
    },
    brewMethod: {
      type: Array,
      required: true,
    },
    // brewGuide: [{
    //     method: {
    //         type: String,
    //         required: false,
    //     },
    //     notes: {
    //         type: String,
    //         required: false,
    //     },
    //     guide: {
    //         in: {
    //             type: String,
    //             required: false,
    //         },
    //         out: {
    //             type: String,
    //             required: false,
    //         },
    //         time: {
    //             type: String,
    //             required: false,
    //         },
    //         string: {
    //             type: String,
    //             required: false,
    //         }
    //     }
    // }],
    // blendComponents: [{
    //     percentage: {
    //         type: String,
    //         required: false,
    //     },
    //     component: {
    //         type: String,
    //         required: false,
    //     },
    // }],
  },
  {
    timestamps: true,
    collection: 'Coffee',
  }
);

const Coffee = mongoose.model('Coffee', coffeeSchema);

export default Coffee;
