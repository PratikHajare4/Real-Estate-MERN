// const mongoose = require('mongoose');
import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 62,
        minlength: 10
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['rent', 'sale'],
        required: true
    },
    bedrooms: {
        type: Number,
        required: true,
        min: 1
    },
    bathrooms: {
        type: Number,
        required: true,
        min: 1
    },
    regularPrice: {
        type: Number,
        required: true,
        min: 1
    },
    discountPrice: {
        type: Number,
        min: 0
    },
    offer: {
        type: Boolean,
        default: false
    },
    parking: {
        type: Boolean,
        default: false
    },
    furnished: {
        type: Boolean,
        default: false
    },
    apartments: {
        type: String,
        required: true
    },
    totalArea: {
        type: String,
        required: true
    },
    projectRERAID: {
        type: String,
        required: true
    },
    possessionDate: {
        type: String,
        required: true
    },
    carpetRange: {
        type: String,
        required: true
    },
    masterPlanUrl: {
        type: String,
        default: ''
    },
    amenities: {
        gym: {
            type: Boolean,
            default: false
        },
        pool: {
            type: Boolean,
            default: false
        },
        park: {
            type: Boolean,
            default: false
        },
        // Add more amenities as needed
    },
    imageUrls: {
        type: [String],
        validate: [arrayLimit, '{PATH} exceeds the limit of 6']
    }
}, { timestamps: true });

function arrayLimit(val) {
    return val.length <= 6;
}





const Listing = mongoose.model('Listing', listingSchema);

export default Listing;