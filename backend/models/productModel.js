import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    restaurant: {type: String, required: true},
    restaurantId: {type: Number, required: true},
    prix: {type: Number, required: true},
    enStock: {type: Number, required: true},
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
},
{
    timestamps: true
});

const Product = mongoose.model('Product',productSchema) 
export default Product