import { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="bg-gray-300">
      <h1 className="font-bold">Message from API:</h1>
      <p className="text-red-500 p-4 text-2xl">{message}</p>
      <Button className="mt-4">Click Me!</Button>
    </div>
  );
}

export default App;
