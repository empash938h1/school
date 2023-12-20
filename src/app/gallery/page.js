import Image from 'next/image';
import { getImagesInFolder } from '../../utils/cloudinary';

export default async function Home() {
    const galleryImages = await getGallery();
    return (
        <div className="px-7 mb-10">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="flex gap-4 justify-center md:justify-between flex-wrap">
                {galleryImages.map((item) => {
                    return <Image className="h-[200px] object-contain rounded" key={item.public_id} src={item.secure_url} alt={item.public_id} />
                })
                }
            </div>
        </div>
    );
}

async function getGallery() {
    const folder = 'school/gallery';
    return await getImagesInFolder(folder);
}