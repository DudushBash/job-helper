import './App.css'
import Header from './components/Header';
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  async function handleSearch() {
    console.log("Searching:", query);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/search?query=${encodeURIComponent(query)}`
      );

      console.log("Status:", response.status);

      const data = await response.json();

      console.log("Data:", data);

      setJobs(data);
    } catch (error) {
      console.error("Fetch error:", error);
  }
}

  return(
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>

      <pre>
        {JSON.stringify(jobs, null, 2)}
      </pre>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button> 
      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <Header title = 'JOOOOPAAAAA' subtitle="Search jobs powered by AI"/>
      <p>Find Your Dream Job.</p>
    </div>
  );
}


export default App;