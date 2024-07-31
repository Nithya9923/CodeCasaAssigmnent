import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Home
        </Link>
        <div>
          <Link href="#features" className="text-gray-300 hover:text-white mx-2">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white mx-2">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
