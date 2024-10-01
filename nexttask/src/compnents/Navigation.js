import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Next.js E-commerce
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}