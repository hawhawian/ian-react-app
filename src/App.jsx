import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from "./component/MySlider";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href="https://hawhawian.github.io/IanJavaScriptWeb/" target="_blank">
      <img src="../public/home.png" className="logo homepage" alt="Ian Homepage" />
        </a>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
      <h1>Vite + React 程式設計</h1>
      <h2>5B1G0038 張皓</h2>
      <h2>Slider</h2>
      <div>
        <p>R:<MySlider /></p>
        <p>G:<MySlider /></p>
        <p>B:<MySlider /></p>
      </div>
      <div className="card">
      <h2>Count</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
