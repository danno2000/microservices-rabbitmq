import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Dan the Dev',
        email: 'dan@example.com',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('✅ Success:', data);
      })
      .catch((err) => {
        console.error('❌ Error:', err);
      });
  }, []);
  return <div>hello</div>;
}

export default App;
