import Navigation from '../compnents/Navigation';
import './globals.css';

export const metadata = {
  title: 'Next.js E-commerce',
  description: 'A simple e-commerce site built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            © 2024 Next.js E-commerce. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}