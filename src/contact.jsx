function Contact() {
    return (
        <div className="p-6">
            <div className="flex flex-wrap justify-center">
                {/* Full Name */}
                <div className="flex flex-col mx-4 my-4">
                    <span className="text-white font-normal text-xs">Full Name</span>
                    <textarea
                        rows="1"
                        className="resize-none bg-[#1A1A1A] rounded-md sm:w-[30vw] pt-2 pb-2 pl-4 placeholder:text-[#3D3D3D] text-white"
                        placeholder="Ashish Sharma"
                    ></textarea>
                </div>

                {/* Email Address */}
                <div className="flex flex-col mx-4 my-4">
                    <span className="text-white font-normal text-xs">Email Address</span>
                    <input
                        type="email"
                        className="bg-[#1A1A1A] rounded-md pt-2 sm:w-[30vw] pb-2 pl-4 placeholder:text-[#3D3D3D] text-white"
                        placeholder="example@example.com"
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col  mx-4 my-4">
                    <span className="text-white font-normal text-xs">Phone Number</span>
                    <input
                        type="tel"
                        className="bg-[#1A1A1A] rounded-md sm:w-[30vw] pt-2 pb-2 pl-4 placeholder:text-[#3D3D3D] text-white"
                        placeholder="123-456-7890"
                    />
                </div>

                {/* Subject */}
                <div className="flex flex-col mx-4 my-4">
                    <span className="text-white font-normal text-xs">Subject</span>
                    <input
                        type="text"
                        className="bg-[#1A1A1A] rounded-md sm:w-[30vw] pt-2 pb-2 pl-4 placeholder:text-[#3D3D3D] text-white"
                        placeholder="Subject of your message"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col mx-4 my-4">
                    <span className="text-white font-normal text-xs">Message</span>
                    <textarea
                        rows="4"
                        className="resize-none bg-[#1A1A1A] w-[80vw] rounded-md pt-1 pl-4 placeholder:text-[#3D3D3D] text-white"
                        placeholder="Your message here"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button className="bg-[#FF014F] w-[60vw] text-white py-2 px-6 rounded-md mt-4">
                    Send Message
                </button>
            </div>
        </div>
    );
}

export default Contact;
