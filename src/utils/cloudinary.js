// utils/cloudinary.js

import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getImagesInFolder = async (folder) => {
    try {
        const response = await cloudinary.v2.api.resources({
            type: 'upload',
            prefix: folder, // Specify the folder
            max_results: 100, // Adjust as needed
        });

        return response.resources;
    } catch (error) {
        console.error('Error fetching images from Cloudinary:', error.message);
        throw error;
    }
};
