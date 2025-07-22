

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-red-600 mb-8">YouTube Clone</h1>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Tailwind CSS is working! 🎉</p>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Count: {count}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
