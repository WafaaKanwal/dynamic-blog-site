import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-700  text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Tech<span className="text-teal-300">Insights</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-pink-300 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-pink-300 transition duration-300">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

