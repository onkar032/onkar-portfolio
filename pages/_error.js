function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p className="text-gray-600 mb-6">
          Something went wrong. Please try again.
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

