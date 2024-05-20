import Listing from "../models/listing.model.js";
import express from 'express';

export const createListing = async (req, res, next) => {
    try {
        const {
            name, description, address, regularPrice, discountPrice,
            bathrooms, bedrooms, furnished, parking, type, offer,
            imageUrls, apartments, totalArea, projectRERAID, possessionDate
        } = req.body;

        const newListing = new Listing({
            name,
            description,
            address,
            regularPrice,
            discountPrice,
            bathrooms,
            bedrooms,
            furnished,
            parking,
            type,
            offer,
            imageUrls,
            apartments,
            totalArea,
            projectRERAID,
            possessionDate
        });

        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        next(error);
    }
};

export const deleteListing = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        next(error);
    }
};
