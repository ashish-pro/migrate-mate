import aboutImg from '/assets/about.png'

const About = () => {
  return (
    <div> <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src={aboutImg}
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-xl text-gray-400 font-bold md:text-3xl">
                <span className="text-2xl text-gray-500 font-bold md:text-4xl" >migrate</span><span className="text-2xl text-red-900 font-bold md:text-4xl">mate.</span> <br />Your All-in-One Companion for Seamless Travel Abroad
                </h2>
                <p className="mt-6 text-gray-600">
                Welcome to Migrate Mate, your passport to effortless travel planning. At Migrate Mate, we are dedicated to simplifying your journey abroad. 
                Our comprehensive suite of tools—from currency conversion to weather reports and cost-of-living comparisons—is tailored to enhance your travel experience. 
                We believe in empowering adventurers
                 with reliable information and seamless utilities, ensuring every trip is filled with confidence and excitement.
                </p>
                <p className="mt-4 text-gray-600">
                Join us as we redefine the way you explore the world. Your travel ease is our mission at Migrate Mate
                </p>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default About