export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Page not found
        </p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-apple-blue text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

