import Image from "next/image";

export default function Home() {
    return (
        <section className="px-6">
            <div className="mb-10">
                <h2 className="text-3xl font-bold uppercase mb-4 text-center md:text-left">Our History</h2>
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4">

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
                    <Image className="flex-1 w-[300px]" src="assets/carousel3.avif" alt="wallpaper" />
                </div>

            </div>
            <div className="mb-10">
                <h2 className="text-3xl font-bold uppercase mb-4 text-center md:text-right">Mission and Vision</h2>
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

                    <Image className="flex-1 w-[300px]" src="assets/carousel1.jpg" alt="wallpaper" />
                </div>

            </div>
        </section>
    )
}