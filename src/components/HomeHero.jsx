import { Link } from "react-router-dom";

const HomeHero = () => {
    return (
        <>
        <div className=" w-full h-[60vh] mt-24 mx-auto bg-hero-pattern bg-no-repeat bg-cover bg-top flex flex-col gap-16 justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="bg-green-50/90 text-4xl md:text-6xl font-bold">High Time <span className="text-blue-600">Quality</span></h1>
            <p className="bg-green-50/80 text-2xl md:text-3xl font-bold">Gemeinsam Zukunft gestalten</p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 hover:scale-110 transition duration-300 shadow-sm shadow-green-900 text-blue-50 py-4 px-2 rounded-lg text-lg">
                <Link to="/contact">Kontaktieren Sie Uns</Link>
            </button>
        </div>
        </>
    )
}

export default HomeHero;