import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex text-center justify-center max-width  grid-cols-1 gap-5">
        {/* Contact Us */}
        <div className="w-full md:w-1/3 px-4  text-center justify-center">
          <h3 className="text-lg mb-4">Contact Us</h3>
          <p>Email: mbpi.obpl@gmail.com</p>
          <p>Phone: +91 7389944119</p>
          <p>Address: IGH, Bhopal, India</p>
        </div>

        {/* Follow Us */}
        <div className="hidden w-full md:w-1/3 px-4  ">
          <h3 className="text-lg  mb-4 ">Follow Us</h3>
          <div className="flex text-center justify-between ">
            <Link  to="#" className="text-center text-white hover:text-blue-500 transition">
              Twitter
            </Link>
            <Link to="#" className="text-white hover:text-blue-500 transition">
              Facebook
            </Link>
            <Link to="#" className="text-white hover:text-blue-500 transition">
              Instagram
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className=" w-full hidden md:w-1/3 px-4  ">
         
          <ul>
            <li>
              <Link to="/" className="text-white hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Rockets" className="text-white hover:text-blue-500 transition">
                Rockets
              </Link>
            </li>
            <li>
              <Link to="/Capsules" className="text-white hover:text-blue-500 transition">
                Capsules
              </Link>
            </li>
         
          </ul>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
