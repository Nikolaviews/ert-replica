export default function UnderConstruction() {
    return (
        <div className=" flex items-center justify-center h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <svg
                        className="mx-auto w-24 h-24 text-yellow-400 animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01m-.01-10a9 9 0 100 18 9 9 0 000-18z"
                        />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Under Construction</h1>
                <p className="text-gray-300 mb-6">
                    We're working hard to bring something amazing. Stay tuned!
                </p>
                {/* <div className="flex justify-center space-x-4">
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
                        Go Back
                    </button>
                    <button className="border border-gray-400 px-6 py-2 rounded-lg hover:border-white transition duration-300">
                        Contact Us
                    </button>
                </div> */}
            </div>
        </div>
    );
}
