import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      searchText(text)
      setText('')
    } else {
      alert('Please enter a search term')
    }
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8 max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search images (e.g. nature, car)..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch