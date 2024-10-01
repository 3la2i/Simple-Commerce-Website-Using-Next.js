import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
      <p className="text-xl mb-8">Discover  products!</p>
      <Link
        href="/products"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Shop Now
      </Link>
    </div>
  );
}