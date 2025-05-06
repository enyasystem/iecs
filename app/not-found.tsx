export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="inline-block px-6 py-3 bg-[#D4AF37] text-blue-950 font-semibold rounded hover:bg-[#C09C2C] transition">Go Home</a>
    </div>
  )
}