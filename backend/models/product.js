import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter a product name"],
  },
  description: {
    type: String,
    require: [true, "Please enter a product description"],
  },
  price: {
    type: Number,
    require: [true, "Please enter a product price"],
  },
  image: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],

  category: {
    type: String,
    require: [true, "Please enter a category name"],
    enum: {
      values: ["Electronics", "Laptops", "Headphones"],
      message: "Please select a correct category",
    },
  },
  seller: {
    type: String,
    require: [true, "Please enter a product seller"],
  },
  stock: {
    type: Number,
    require: [true, "Please enter a product stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
