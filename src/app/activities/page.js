import { getImagesInFolder } from '../../utils/cloudinary';
export default async function Home() {
    const facilities = await getFacilities();
    return (
        <section className="px-6">
            <div className="mb-10">
                <h2 className="text-3xl font-bold uppercase mb-4 text-center md:text-right">Our History</h2>
                <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-4">

                    <div className="flex-1 text-sm text-gray-600 text-justify">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur minima quos repellendus ut, incidunt placeat sint eius vero id repudiandae est molestias! Quidem beatae sed, repudiandae eaque laudantium totam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at illo eveniet sequi molestias, dignissimos expedita, nobis animi deleniti accusamus blanditiis numquam laborum magnam quas excepturi consequuntur harum optio! Blanditiis!
                        </p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur minima quos repellendus ut, incidunt placeat sint eius vero id repudiandae est molestias! Quidem beatae sed, repudiandae eaque laudantium totam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at illo eveniet sequi molestias, dignissimos expedita, nobis animi deleniti accusamus blanditiis numquam laborum magnam quas excepturi consequuntur harum optio! Blanditiis!
                        </p>
                    </div>

                    <img className="flex-1 w-[300px]" src="assets/carousel3.avif" alt="wallpaper" />
                </div>

            </div>

            <div className="mb-10">
                <h2 className="text-3xl text-center font-bold mb-4">Facilities</h2>
                <div className="flex flex-wrap gap-4 justify-evenly">
                    {facilities.map(item => {
                        const title = item.public_id.split('/')[2];
                        return (<div key={item.public_id}>
                            <img className="w-[250px] h-[300px] rounded-[50px] object-cover" src={item.secure_url} alt={item.public_id} />
                            <h3 className="text-center capitalize font-bold mt-2">{title}</h3>
                        </div>)
                    })}
                </div>
            </div>
        </section>
    )
}

async function getFacilities() {
    const folder = 'school/facilities';
    return await getImagesInFolder(folder);
}