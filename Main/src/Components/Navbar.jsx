import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav className="bg-blue-950 text-white px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="font-bold text-2xl inline-flex items-center">
                    <FaBlog className="inline-block ml-2 mr-2 text-yellow-300 drop-shadow" />
                    <h1 className="tracking-wide">BlogWithMe</h1>
                </div>
                <ul className="flex space-x-8">
                    <li><Link to="/" className="hover:text-yellow-300 transition-colors font-medium">Home</Link></li>
                    <li><Link to="/About" className="hover:text-yellow-300 transition-colors font-medium">About</Link></li>
                    <li><Link to="/Services" className="hover:text-yellow-300 transition-colors font-medium">Services</Link></li>
                    <li><Link to="/Contact" className="hover:text-yellow-300 transition-colors font-medium">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;