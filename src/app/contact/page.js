export default function Home() {
    return (
        <section id="contactus" className="mb-20">
            <h2 className="text-center text-3xl font-bold mb-10">Contact Us</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                <div className="text-gray-700 w-[300px]">
                    <p className="text-justify text-base">Submit your query here. We provide 24/7 contact support to your queries. Please don&apos;t hesitate to directly contact us.</p>
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

    );
}