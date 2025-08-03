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
                    <li><a href="/" className="hover:text-yellow-300 transition-colors font-medium">Home</a></li>
                    <li><a href="/About" className="hover:text-yellow-300 transition-colors font-medium">About</a></li>
                    <li><a href="/Services" className="hover:text-yellow-300 transition-colors font-medium">Services</a></li>
                    <li><a href="/Contact" className="hover:text-yellow-300 transition-colors font-medium">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;