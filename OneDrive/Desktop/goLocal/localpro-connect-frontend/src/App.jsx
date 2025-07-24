import React, { useState, useEffect } from 'react';

// Main App component for LocalPro Connect
function App() {
  // State to store the fetched services
  const [services, setServices] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Make a GET request to the backend API for services
        const response = await fetch('http://localhost:5000/api/services');
        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
          // If not successful, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON response
        const data = await response.json();
        // Update the services state with the fetched data
        setServices(data);
      } catch (err) {
        // Catch any errors during the fetch operation and update the error state
        console.error("Failed to fetch services:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        // Set loading to false once the fetch operation is complete (success or failure)
        setLoading(false);
      }
    };

    fetchServices(); // Call the fetchServices function
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar - Responsive and Urban Company inspired */}
      <nav className="bg-white shadow-sm py-3 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50">
        <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-2 sm:mb-0">LocalPro Connect</div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-base md:text-lg">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-base md:text-lg">Become a Pro</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base">
            Login/Signup
          </button>
        </div>
      </nav>

      {/* Hero Section - Responsive and Urban Company inspired, with focus on search */}
      <header className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24 px-4 text-center overflow-hidden shadow-lg">
        {/* Abstract shapes for background visual interest (subtler) */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <circle cx="15" cy="15" r="10" fill="currentColor" className="text-blue-400 animate-pulse animation-delay-100" />
            <circle cx="85" cy="40" r="15" fill="currentColor" className="text-blue-500 animate-pulse animation-delay-300" />
            <rect x="30" y="70" width="25" height="10" rx="5" fill="currentColor" className="text-blue-300 animate-pulse animation-delay-500" />
            <polygon points="65,10 90,25 75,50" fill="currentColor" className="text-blue-400 animate-pulse animation-delay-700" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-5 leading-tight drop-shadow-lg">
            Home Services, Made Easy.
          </h1>
          <p className="text-lg md:text-2xl mb-8 md:mb-10 opacity-95">
            Book trusted professionals for all your needs, right at your doorstep.
          </p>
          <div className="bg-white p-3 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center max-w-sm sm:max-w-xl mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="text"
              placeholder="Search for services (e.g., Salon at Home, AC Repair)"
              className="flex-grow p-3 md:p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-3 focus:ring-blue-400 w-full sm:w-auto border border-gray-300"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-3 focus:ring-green-400 w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* How It Works Section - Responsive and Clean */}
      <section className="container mx-auto py-12 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-12">How LocalPro Connect Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-50 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 text-3xl md:text-4xl shadow-md">
              <span className="font-bold">1</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">Book a Service</h3>
            <p className="text-sm md:text-base text-gray-600">Choose from a wide range of services and book at your convenience.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-50 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 text-3xl md:text-4xl shadow-md">
              <span className="font-bold">2</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">Get Matched</h3>
            <p className="text-sm md:text-base text-gray-600">We connect you with verified and top-rated professionals nearby.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-50 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 text-3xl md:text-4xl shadow-md">
              <span className="font-bold">3</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">Service at Home</h3>
            <p className="text-sm md:text-base text-gray-600">Professionals arrive at your doorstep to deliver quality service.</p>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive and visually appealing cards */}
      <section className="container mx-auto py-12 md:py-16 px-4 bg-white rounded-xl shadow-lg mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-12">Popular Services</h2>

        {/* Conditional rendering based on loading, error, or data */}
        {loading ? (
          <p className="text-xl text-gray-600 text-center">Loading services...</p>
        ) : error ? (
          <p className="text-xl text-red-600 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center cursor-pointer"
              >
                {/* Service Icon with a cleaner background */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 md:mb-5 text-3xl md:text-4xl shadow-inner">
                  {/* Using emojis for now, can be replaced with Lucide React or Font Awesome */}
                  {service.name === 'Plumbing' && '💧'}
                  {service.name === 'Electrical' && '⚡'}
                  {service.name === 'Carpentry' && '🔨'}
                  {service.name === 'Beauty & Salon' && '💅'}
                  {service.name === 'Cleaning' && '🧹'}
                  {service.name === 'Tech Support' && '💻'}
                  {service.name === 'Vehicle Care' && '🚗'}
                  {service.name === 'Driver' && '👨‍✈️'}
                  {!['Plumbing', 'Electrical', 'Carpentry', 'Beauty & Salon', 'Cleaning', 'Tech Support', 'Vehicle Care', 'Driver'].includes(service.name) && '🛠️'}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  {service.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 flex-grow mb-3 md:mb-4">{service.description}</p>
                <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action Section - Responsive and inviting */}
      <section className="bg-blue-600 text-white py-12 md:py-16 px-4 text-center rounded-xl mx-auto max-w-6xl shadow-xl my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Ready to Experience Convenience?</h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-95">
          Join LocalPro Connect as a customer or become a verified professional today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white text-base">
            Get Started as Customer
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base">
            Become a Professional
          </button>
        </div>
      </section>

      {/* Footer - Responsive and more detailed */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-10 px-4 text-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">LocalPro Connect</h3>
            <p className="text-sm">Your trusted partner for on-demand services.</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Support</h3>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} LocalPro Connect. All rights reserved.</p>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-3 md:mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
