const ContactSection = () => {
    return (
      <section id="join-section" className="bg-gradient-to-b from-white to-amber-50 py-20 px-6 sm:px-8 lg:px-12 border-t border-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We welcome you to visit, call, or join our virtual or in-person classes. Whether youre just beginning or deepening your journey, our doors—and hearts—are open.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-gray-700 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Location
                </h3>
                <p className="text-lg ml-8 border-l-4 border-amber-200 pl-4">
                  <strong className="block text-gray-900">5b, Tarmac Road, Adalemo,</strong>
                  Sango Ota, Ogun State, Nigeria
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Numbers
                </h3>
                <div className="ml-8 space-y-2">
                  <a href="tel:+2349029887690" className="block text-lg hover:text-amber-700 transition-colors duration-300 hover:underline">+234 902 988 7690</a>
                  <a href="tel:+2349054610771" className="block text-lg hover:text-amber-700 transition-colors duration-300 hover:underline">+234 905 461 0771</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Modes of Learning
                </h3>
                <ul className="ml-8 space-y-3">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="bg-amber-100 p-2 rounded-full flex items-center justify-center">📍</span>
                    <span>On-site physical classes</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="bg-amber-100 p-2 rounded-full flex items-center justify-center">🕓</span>
                    <span>Weekend & flexible schedules</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="bg-amber-100 p-2 rounded-full flex items-center justify-center">🏫</span>
                    <span>Boarding & personalized arrangements available</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="bg-amber-100 p-2 rounded-full flex items-center justify-center">💻</span>
                    <span>Virtual classes via Zoom & Google Meet</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-10 rounded-2xl shadow-lg flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-gray-800">Ready to Begin Your Journey?</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Reach out today to start your path of Quranic memorization, Tajweed mastery, Arabic fluency, or Islamic scholarship with our experienced instructors.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-4 mt-6">
                  <h5 className="text-xl font-semibold text-amber-600">Availability</h5>
                  <p className="text-gray-700">
                    We welcome learners of all ages and backgrounds. Whether you are nearby or across the world, there is a space for you in our learning community.
                  </p>
                </div>
              </div>
              
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
                  Message Us on WhatsApp
                </a>
                
                <div className="mt-6 text-center">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;