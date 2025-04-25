"use client"
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';


const Banner = () => {
    return (
        <main className='bg-white'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-32 sm:pb-24">
                    {/* Added logo image at the top center */}
                    <div className="flex justify-center mb-8">
                        <img
                            className="h-38 w-44"
                            src={'/assets/logo/logg.png'}
                            alt="Arabic Institute Logo"
                        />
                    </div>
                    
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
                            Master Arabic Language <br /> with our specialized courses
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-black">
                            Memorize Quran and learn Modern Arabic with guidance from expert linguists and native speakers at Daarul-Qirat.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className=" sm:block -space-x-2 overflow-hidden">
                            <div className="col-span-3 sm:col-span-2 mt-2">
                                <button className="bg-purple w-full hover:bg-pruple text-white font-bold py-4 px-3 rounded">
                                    Book a Free Consultation
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>


                    {/* DROPDOWN BUTTONS */}


                    <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Banner;