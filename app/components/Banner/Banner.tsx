"use client"
import Image from 'next/image';
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';


const Banner = () => {
    return (
        <main className='bg-white'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-32 sm:pb-24  bg-gray-100 rounded-lg py-12 px-8">
                    {/* Added logo image at the top center */}
                    <div className="flex justify-center mb-8">
                        <Image
                    
                            src={'/assets/logo/logg.png'}
                            height={38 * 4} 
                             width={44 * 4}
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
                            <div className="mt-12">
                <a
                  href="https://wa.me/2349029887690"
                  className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-black font-medium px-8 py-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full md:w-auto text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Free Consultation
                </a>
                
                <div className="mt-6 text-center">
                <hr className="mt-8 border-t-2 border-gray-200" />
                </div>
                </div>
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