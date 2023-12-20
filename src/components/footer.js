import Image from "next/image";

export default function Footer() {
    return (

        <footer id="#footer" className="flex flex-col md:flex-row item-center md:items-start justify-center md:justify-around pb-8">
            <div className="flex flex-col items-center md:items-start gap-4">
                <Image
                    className="w-20 object-contain"
                    src="assets/logo.png" alt="School Logo" />
                <h2 className="text-2xl font-semibold">Star School</h2>
                <div>
                    <p className="text-sm">Urlabari, Morang</p>
                    <p className="text-sm">Koshi Province, Nepal</p>
                </div>
                <p className="flex gap-2 text-sm">
                    <span className="font-medium">Email:</span>
                    <span>contact@school.com</span>
                </p>
            </div>

            <div className="flex flex-col pl-10 md:p-0 gap-8">
                <div>
                    <h2 className="font-semibold">Call</h2>
                    <p className="text-gray-500">977982030302</p>
                    <p className="text-gray-500">977982030302</p>
                </div>
                <div>
                    <h2 className="font-semibold">Office Hours</h2>
                    <p className="text-gray-500">Sun - Thurs : 10:00 AM - 04:00 PM
                    </p>
                    <p className="text-gray-500">Fri : 10:00 AM - 01:00 PM
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold">Address</h2>
                    <p className="text-gray-500">Urlabari, Morang</p>
                </div>

            </div>

            <div className=" pl-10 md:p-0 mt-10 md:m-0">
                <h3 className="font-semibold text-2xl">Quick Links</h3>
                <ul className="mt-2 flex flex-col gap-2">
                    <li className="font-medium text-gray-600"><a href="#">Home</a></li>
                    <li className="font-medium text-gray-600"><a href="#">About</a></li>
                    <li className="font-medium text-gray-600"><a href="#">Activities</a></li>
                    <li className="font-medium text-gray-600"><a href="#">Gallery</a></li>
                    <li className="font-medium text-gray-600"><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer >

    );
}