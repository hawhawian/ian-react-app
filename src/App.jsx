import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from "./component/MySlider";
import MyPanel from "./component/MyPanel";
import MyCalculator from "./component/MyCalculator";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <h2>第一個元件：Slider</h2>
      <div>
        <p>R:<MySlider /></p>
        <p>G:<MySlider /></p>
        <p>B:<MySlider /></p>
      </div>
      <br/>
      <h2>第二個元件：RGB色彩面板</h2>
      <MyPanel />
      <h2>第三個元件：小算盤計算機</h2>
      <MyCalculator />

      <div className="card">
      <h2>Count</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <a href="https://hawhawian.github.io/IanJavaScriptWeb/" class="link-button">❌離開</a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
