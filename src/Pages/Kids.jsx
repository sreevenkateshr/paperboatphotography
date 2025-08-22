import Link from "next/link";
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, PaintBrushIcon, PlayCircleIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

const CustomSVG = ({ color1 = "#D9FB99", color2 = "#BCC5F2", color3 = "#0732EF", className = "" }) => {
    return (
        <svg
            className={`${className}`}
            viewBox="20.72 20.5 158.56 159.001"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Custom Icon"
        >
            <g>
                <path d="M20.72 126.122V73.828h19.01c18.383 0 33.285 14.902 33.285 33.285v19.01H20.72z" fill={color1} />
                <path d="M73.017 72.794H46.87c-14.441 0-26.147-11.706-26.147-26.147C20.723 32.206 32.43 20.5 46.87 20.5c14.441 0 26.147 11.706 26.147 26.147v26.147z" fill={color2} />
                <path d="M179.28 20.5v52.294h-19.01c-18.383 0-33.285-14.902-33.285-33.285V20.5h52.295z" fill={color1} />
                <path d="M179.28 127.206V179.5h-19.01c-18.383 0-33.285-14.902-33.285-33.285v-19.01h52.295z" fill={color3} />
                <path d="M73.854 179.5v-52.294h19.01c18.383 0 33.285 14.902 33.285 33.285v19.01H73.854z" fill={color1} />
                <path d="M126.122 73.828v52.294h-19.01c-18.383 0-33.285-14.902-33.285-33.285v-19.01h52.295z" fill={color2} />
            </g>
        </svg>
    );
};
const BusinessConsultingSection = () => {
    return (
        <section className="bg-white py-16 px-10 relative overflow-hidden">
            <div className="container mx-auto">
                {/* Main Flex Container */}
                <div className="flex flex-col lg:flex-row justify-between relative z-10">
                    {/* Left Content */}
                    <div className="text-left max-w-3xl relative">
                        <h1 className="text-4xl font-bold leading-tight relative z-20">
                            Driving Digital Transformation <br />
                            <span className="text-indigo-600">
                                With Intelligent Software Solutions
                            </span>
                        </h1>
                        <div className="mt-6 py-2">
                            <Link href="/contact-us" title="More about ordinal" className="mt-6 px-6 py-2 border border-indigo-700 text-indigo-600 rounded-full text-lg hover:bg-indigo-700 hover:text-white transition relative z-20" >
                                Get a Free Consultation
                            </Link>
                        </div>
                        {/* Info Cards */}
                        <div className="flex flex-col items-center gap-6 mt-12 relative z-20 md:flex-row md:items-start">
                            <div className="border border-blue-600 rounded-lg p-6 w-full md:w-96 bg-white">
                                <h3 className="text-lg font-bold text-indigo-600">
                                    Strategic Growth Planning
                                </h3>
                                <p className="text-gray-700 text-sm mt-2">
                                    Discover innovative strategies to scale your business effectively,
                                    increase revenue, and enhance operational efficiency.
                                </p>
                            </div>
                            <div className="border border-blue-600 rounded-lg p-6 w-full md:w-96 bg-white">
                                <h3 className="text-lg font-bold text-indigo-600">
                                    Optimized Business Operations
                                </h3>
                                <p className="text-gray-700 text-sm mt-2">
                                    Leverage cutting-edge solutions to streamline your business
                                    processes and boost productivity with data-backed decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Section: CustomSVG (Background on Small Screens) */}
                    <div className="absolute inset-0 flex justify-end items-center opacity-10 xl:relative xl:w-1/3  xl:opacity-100 lg:mt-0">
                        <CustomSVG className="w-full xl:w-[389px] xl:h-[391px]" color1="#FACC15" color2="#60A5FA" color3="#EF4444" />
                    </div>
                </div>
            </div>
        </section>
    );
};
const ServicesSection = () => {
    const services = [
        { icon: CodeBracketIcon, title: "Website Design & Development", desc: "Crafting responsive, modern websites tailored to your brand and business goals.", href: "/services/website-design-development" },
        { icon: DevicePhoneMobileIcon, title: "Mobile App Development", desc: "Building intuitive mobile applications for Android and iOS platforms.", href: "/services/Mobile-app-development"  },
        { icon: GlobeAltIcon, title: "Web App Development", desc: "Building robust, scalable, and interactive web applications to enhance user experiences and drive business growth.",href: "/services/web-app-development"  },
        { icon: PaintBrushIcon, title: "Logo Design & Branding", desc: "Creating memorable brand identities through unique logo designs and cohesive branding elements." , href: "/services/logo-designing-branding"  },
        { icon: PlayCircleIcon, title: "Video Advertising", desc: "Producing impactful video ads for platforms like Meta (Facebook/Instagram), YouTube, and Google." , href: "/services/video-advertising"  },
        { icon: MegaphoneIcon, title: "Digital Marketing & Advertising", desc: "Boosting online presence through SEO, social media marketing, and targeted advertising campaigns." , href: "/services/Digital-marketing-development" }
    ];
    return (
        <section className="py-16 px-10 bg-white">
            <div className="container mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-bold leading-tight">
                    What <span className="text-indigo-600">We Offer</span>
                </h2>
                <p className="text-gray-700 text-md mt-2">
                    We make your business sustainable in the world of technology by crafting
                    innovative technological solutions with trusted service policies. Our expertise
                    ensures efficiency, security, and scalability for your digital success.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-16 mt-10">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.href} // 👈 Link to the service section
                            className="border border-blue-600 rounded-lg p-6 bg-white text-center shadow-md hover:shadow-lg transition block"
                        >
                            <service.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-gray-600">{service.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>

    );
}
export default function Welcome() {
    return (
        <>
            <BusinessConsultingSection />
            <section className="py-20 px-10 bg-blue-50 ">
                <div className="container mx-auto">
                    <article className="mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <div className="relative block group">
                            <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="/home-page/who-we-are.jpg" width="540" height="303" alt="About Us" />
                            </figure>
                        </div>
                        <div>
                            <header>
                                <h3 className="text-2xl lg:text-3xl font-bold text-black md:mb-4 pl-2 border-l-4 border-indigo-600">Who <span className="text-indigo-600">We Are ?
                                </span></h3>
                            </header>
                            <p className="text-md text-gray-700 py-5 md:py-1 text-justify">Ordinal is a leading SaaS-based software company delivering innovative digital solutions since 2013. With a strong foundation in technology, creativity, and expertise, we empower businesses across industries to establish a strong digital presence.</p>
                            <p className="text-md text-gray-700 py-5 md:py-1 text-justify">Our customer-centric approach and cutting-edge technology solutions enable businesses to scale efficiently and stay ahead in the competitive market. Headquartered in Kanniyakumari, India, we leverage top-tier programming talent to provide cost-effective, scalable, and reliable digital services tailored to client needs.</p>
                            <p className="text-md text-gray-700 py-5 md:py-1 text-justify">At Ordinal, we drive digital transformation through innovation, ensuring seamless growth, efficiency, and success for businesses worldwide.</p>
                            <div className="mt-5">
                                <Link href="/company/about-us" title="More about ordinal" className="inline-block px-10 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring" >
                                    More About Ordinal
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <ServicesSection />
            <section className="overflow-hidden py-16 px-10 bg-blue-50">
                <div className="container mx-auto">
                    <div className="mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <div >
                            {/* Add Image / Illustration / SVG Here */}
                            <div className="flex relative items-center justify-center w-full h-100 mt-10 mb-10  lg:w-12/12">
                                <div className="absolute top-0 -left-6 w-60 h-60 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-typing"></div>
                                <div className="absolute top-0 -right-8 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-typing animation-delay-2000"></div>
                                <div className="absolute -bottom-12 left-50 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50  animate-typing  animation-delay-4000"></div>
                                <div className=" overflow-hidden">
                                    <img className="object-cover relative w-full h-full mx-auto  rounded-md " src="/team.png" alt="glasses photo" />
                                </div>
                            </div>
                        </div>
                        {/* Left Section */}
                        <div >
                            <div className="mt-10 lg:mt-0">
                                <h2 className="mb-4 text-3xl font-bold md:text-3xl pb-5">
                                    For Professionals
                                    <span className="text-indigo-600"> By Professionals</span>
                                </h2>
                                <p className="text-md text-gray-700 mb-3 pb-5 text-justify">
                                    We make your business sustainable in the world of technology
                                    by crafting innovative technological solutions with trusted service policies.
                                    Our expertise ensures that businesses stay ahead in an ever-evolving digital landscape.
                                </p>
                                <p className="text-md text-gray-700 mb-3 pb-5 text-justify">
                                    At <span className="font-semibold text-indigo-600">Ordinal</span>, we go beyond standard software solutions.
                                    We focus on delivering **scalable, secure, and efficient** digital experiences that
                                    empower businesses to streamline operations, enhance customer engagement, and drive
                                    long-term success.
                                </p>
                                <p className="text-md text-gray-700 mb-3 pb-5 text-justify">
                                    Whether you're a startup looking for robust software foundations or an enterprise
                                    seeking digital transformation, our team of experienced professionals is here to guide
                                    you with tailored, **cutting-edge solutions** that fuel innovation and growth.
                                </p>
                            </div>
                        </div>
                        {/* Right Section */}
                    </div>
                </div>
            </section>
            <section className="overflow-hidden py-16 px-10 bg-white">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-2xl  font-bold md:text-3xl">Ordained to Preserve <span className="text-indigo-600">Your Individuality
                        </span></h2>
                        <p className="text-gray-700 text-md lg:mx-auto">&apos;We exists so that you never have to compromise your productivity&apos;</p>
                    </div>
                    <div className="grid gap-12 items-center md:grid-cols-3">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src="/home-page/research-development.jpg" alt="Research and Development" loading="lazy" width="640" height="805" />
                            <div>
                                <h3 className="text-2xl py-2">Research & Development</h3>
                                <p className="block text-md text-gray-700">We know technology is infinity so we study the changes and trends in technology for security and comfort.</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                                src="/home-page/customer-satisfication.jpg" alt="Customer Satisfaction " loading="lazy" width="1000" height="667" />
                            <div>
                                <h3 className="text-2xl py-2">Customer Satisfaction </h3>
                                <p className="block text-md text-gray-700">We know customer Satisfaction  is key for referral based sales. As a SaaS provider we keep our&apos;s best in support.</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 hover:bg-neutral-500"
                                src="/home-page/reasonable-pricing.jpg" alt="Reasonable Pricing" loading="lazy" width="1000" height="667" />
                            <div>
                                <h3 className="text-2xl py-2">Reasonable Pricing</h3>
                                <p className="block text-md text-gray-700">Better return on investment(ROI) gurranteed. No hidden charges, only standard pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-10 bg-white ">
                <div className="container  mx-auto">
                    <h2 className="text-center text-2xl  font-bold md:text-3xl">Industries <span className="text-indigo-600">We Serve
                    </span></h2>
                    <div className="border-gray-200 border-t mt-5"></div>
                    <div className="flex flex-wrap">
                        <div className=" md:w-1/4 sm:w-1/2 w-full">
                            <ul className="mt-8 space-y-3 text-md ">
                                <li className="flex">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3  text-gray-700">
                                        Education
                                    </p>
                                </li>
                                <li className="flex  ">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Health Care
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Banking
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className=" md:w-1/4 sm:w-1/2 w-full">
                            <ul className="mt-8 space-y-3 text-md">
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Technology
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Real Estate
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Construction
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className=" md:w-1/4 sm:w-1/2 w-full">
                            <ul className="mt-8 space-y-3 text-md">
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Manufacturing
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Agriculture
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Automobile
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className=" md:w-1/4 sm:w-1/2 w-full">
                            <ul className="mt-8 space-y-3 text-md ">
                                <li className="flex">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Traders
                                    </p>
                                </li>
                                <li className="flex">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Transport
                                    </p>
                                </li>
                                <li className="flex">
                                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <p className="ml-3 text-gray-700">
                                        Government
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-10 bg-blue-50 ">
                <div className="container mx-auto">
                    <article className="mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <div className="relative block group" >
                            <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="/home-page/work-with-us.jpg" width="540" height="303" alt="Blog post" />
                            </figure>
                        </div>
                        <div>
                            <header>
                                <h2 className="text-2xl lg:text-3xl font-bold text-black md:mb-4 pl-2 border-l-4 border-indigo-600">Work With <span className="text-indigo-600">Us
                                </span></h2>
                            </header>
                            <p className="text-md text-gray-700 py-5 md:py-1 text-justify">
                                Jobs are waiting for creative minds at Ordinal, By joining Ordinal you can choose to be a part of enthusiastic team. Ordinal should provide a stress free friendly environment, We are frequently expanding our horizons, interested candidates can drop your resumes.
                            </p>
                            <div className="mt-5">
                                <Link href="/career/jobs" title="Apply for job at ordinal" className="inline-block px-10 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring" >
                                    Apply for Job
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className="py-20 px-10 bg-white ">
                <div className="relative sm:my-10  rounded-lg bg-gradient-to-tr from-indigo-300 to-pink-300 p-0.5 shadow-lg container mx-auto">
                    <div className="bg-white p-10 rounded-md">
                        <h2 className="font-bold sm:text-2xl text-lg text-center mb-5">The Most sustainable Information Technology company from Cape Comorin, India, to the World.</h2>
                        <div className="flex gap-6 justify-center">
                            <Link href="/company/about-us" title="About Us at ordinal" className="inline-block sm:px-10 px-5 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring" >
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}