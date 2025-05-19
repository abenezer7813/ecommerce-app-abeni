import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-secondaryy text-white py-12 border-t-8 border-primaryy">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div >
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-gray-100">
          We are a team of passionate individuals dedicated to providing the best products and services to our customers. Our mission is to deliver quality and value in everything we do.
        </p>
        </div>
        <div >
        <h3 className="text-lg font-semibold mb-4">Connect</h3>
        <ul className="space-y-2">
          <li>
            <a href="#"
            className="hover:text-secondaryy">Home</a>
          </li>
          <li>
            <a href="#"
            className="hover:text-secondaryy">Products</a>
          </li>
          <li>
            <a href="#"
            className="hover:text-secondaryy">Services</a>
          </li>

        </ul>
        </div>
        <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#">
            <FaFacebook color="#3b5998"  size={24}/>
          </a>
          <a href="#">
            <FaTwitter color="#1ad1f2"  size={24}/>
          </a>
          <a href="#">
            <FaInstagram color="#e4405f"  size={24}/>
          </a>
          <a href="#">
            <FaLinkedin color="#0077b5" size={24} />
          </a>


        </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-100">Email: abenimom1994@gmail.com</p>
          <p className="text-gray-100">Phone:+251 968-33-9379</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-100">All Rights Reserved.</p>
      </div>
      </div>
        
    </footer>
  )
}

export default Footer
