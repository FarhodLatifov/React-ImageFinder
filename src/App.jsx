import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=48942419-7c46ec9c85a15c0659aa99564&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setLoading(false)
      })
      .catch(err => console.error('Fetch error:', err))
  }, [term])

  return (
    <div className="container mx-auto px-4">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {loading && (
        <h2 className="text-center text-3xl text-gray-600 mt-16">Loading...</h2>
      )}

      {!loading && images.length === 0 && (
        <h2 className="text-center text-3xl text-gray-500 mt-16">No Images Found</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {!loading &&
          images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
      </div>
    </div>
  )
}

export default App