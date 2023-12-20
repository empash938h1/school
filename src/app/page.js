import Carousel from "@/components/carousel";
import { FaBookReader } from "react-icons/fa";
import { getImagesInFolder } from '../utils/cloudinary';


export default async function Home() {
    const carouselImages = await getCarouselImages();
    const galleryImages = await getGallery();
    return (
        <main className="min-h-screen flex flex-col gap-8">


            <Carousel>
                {carouselImages.map((item) => {
                    const { public_id, secure_url } = item;
                    return <img

                        key={public_id} className="h-[450px] object-cover rounded"

                        src={secure_url} alt="carousel image" />

                })}

            </Carousel>

            {/* services  */}

            <section className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
                <div className="flex justify-center gap-8 flex-wrap">
                    {['Awesome Teachers', 'Documentaries', 'Outdoor Learning', 'Project Based Learning'].map((item, index) => {
                        return (
                            <div key={index} className="w-[200px] border border-gray-200 rounded py-4 px-4 flex flex-col gap-2">
                                <div className="grid place-items-center">

                                    <FaBookReader className="text-3xl" />
                                </div>
                                <h3 className="font-semibold">{item}</h3>
                                <p className="text-gray-700 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quis, maxime incidunt dignissimos ipsa cupiditate illo expedita eius</p>
                            </div>
                        );
                    })
                    }
                </div>
            </section>

            {/* message from principal  */}

            <section className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-8">Message From Principal</h2>
                <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-0 items-start px-4 md:p-0">

                    <div className="flex-1 text-gray-700 text-justify">


                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus perspiciatis accusantium aliquid, aut, sapiente mollitia eligendi dicta ab similique impedit maxime explicabo nesciunt saepe, inventore consequuntur alias! Nesciunt, vero.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ab porro omnis iure, quo dolore aliquid corporis ullam maxime mollitia ipsum, veniam quibusdam labore? Sunt minima aliquid obcaecati aperiam delectus!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus perspiciatis accusantium aliquid, aut, sapiente mollitia eligendi dicta ab similique impedit maxime explicabo nesciunt saepe, inventore consequuntur alias! Nesciunt, vero.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ab porro omnis iure, quo dolore aliquid corporis ullam maxime mollitia ipsum, veniam quibusdam labore? Sunt minima aliquid obcaecati aperiam delectus!
                        </p>
                    </div>
                    <img className="flex-1" src="assets/principal.jpg" alt="Principal" />
                </div>

            </section>

            {/* gallery  */}
            <section id="gallery" className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
                <div className="flex gap-4 justify-center md:justify-between flex-wrap">
                    {galleryImages.map((item, index) => {
                        if (index > 10) return;
                        return <img className="h-[200px] object-contain rounded" key={index} src={item.secure_url} alt={item.public_id} />
                    })
                    }
                </div>
            </section>


            {/* contact us  */}
            <section id="contactus" className="mb-20">
                <h2 className="text-center text-3xl font-bold mb-10">Contact Us</h2>

                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                    <div className="text-gray-700 w-[300px]">
                        <p className="text-justify text-base">Submit your query here. We provide 24/7 contact support to your queries. Please don't hesitate to directly contact us.</p>
                        <p className="mt-4">You can visit us here</p>
                        <p className="flex gap-2 text-sm">
                            <span className="font-bold">Location:</span>
                            <span>Urlabari, Morang</span>
                        </p>
                        <p className="mt-4">You can email us here</p>
                        <p className="flex gap-2 text-sm">
                            <span className="font-bold">Email:</span>
                            <span>contact@school.com</span>
                        </p>
                        <p className="mt-4">You can contact us on</p>
                        <p className="flex gap-2 text-sm">
                            <span className="font-bold">Phone:</span>
                            <span>9820342081</span>
                        </p>
                    </div>

                    <form className="w-[300px] flex flex-col gap-4 text-sm border border-gray-200 p-4 rounded ">

                        <input className="border border-gray-400 p-1 rounded" type="text" placeholder="FullName" />
                        <input className="border border-gray-400 p-1 rounded" type="email" placeholder="Email" />
                        <input className="border border-gray-400 p-1 rounded" type="text" placeholder="Subject" />
                        <textarea className="border border-gray-400 p-1 rounded" rows="5"></textarea>
                        <button className="bg-blue-500 py-2 capitalize text-white font-medium rounded-sm">submit</button>
                    </form>
                </div>

                {/* google map  */}
                <section className="mt-10">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14261.868704355478!2d87.62277282417531!3d26.66553725483989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58ebe21f9dadf%3A0x50d0725189935987!2sUrlabari%20Chowk!5e0!3m2!1sen!2snp!4v1702960175217!5m2!1sen!2snp" className="w-full h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>




        </main>
    )
}

async function getCarouselImages() {
    const folder = 'school/carousel'; // Specify the folder name
    const res = await getImagesInFolder(folder);

    return res;
}

async function getGallery() {
    const folder = 'school/gallery';
    return await getImagesInFolder(folder);
}
