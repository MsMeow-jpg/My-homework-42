import { useState } from 'react'
import DataFetcher from './components/DataFetcher'
import './App.css'

function App() {
  const [postId, setPostId] = useState(1)

  const handlePreviousPost = () => {
    setPostId((currentId) => Math.max(1, currentId - 1))
  }

  const handleNextPost = () => {
    setPostId((currentId) => currentId + 1)
  }

  return (
    <main className="app">
      <section className="hero">
        <div className="hero-badge">Abbey Archive</div>

        <h1>Ale Abbey Data Fetcher</h1>

        <p>
          A small React app that fetches scrolls of data from a distant API
          using axios, useEffect, and async/await.
        </p>
      </section>

      <section className="controls">
        <button onClick={handlePreviousPost} disabled={postId === 1}>
          ← Previous Scroll
        </button>

        <span className="current-id">Scroll ID: {postId}</span>

        <button onClick={handleNextPost}>Next Scroll →</button>
      </section>

      <DataFetcher postId={postId} />
    </main>
  )
}

export default App