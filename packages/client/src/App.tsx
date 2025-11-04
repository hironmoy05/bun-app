import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error))
  }, [])

  return (
    <div className="App">
      <h1>Message from API:</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
