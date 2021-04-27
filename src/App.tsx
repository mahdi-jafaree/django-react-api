import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState<{ title: string, content: string }[]>([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((res) => res.json())
      .then((data) => { setPosts(data) })
      .catch(err => console.log(err))
  }, [])

  return (
    <div style={{ height: '80%' }}>
      {posts.map((post, index) => <p key={index}>{post.title} || {post.content}</p>)}
    </div>
  );
}

export default App;
