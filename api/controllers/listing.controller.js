import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
    try{
        console.log("Request received at /create");
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch(error) {
        next(error);
    }
};

export const deleteListing = async (req, res , next) => {
    const listing = await Listing.findById(req.param.id);

    try{
        await Listing.findByIdAndDelete(req.param.id);
        res.status(200).json('Listing has been deleted.')
    } catch (error) {
        next(error);
    }


}