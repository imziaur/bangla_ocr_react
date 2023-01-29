import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import preprocessImage from './preprocess';
import './App.css';

function App() {
 const [imagePath, setImagePath] = useState("")
 const [text, setText] = useState("")
 const canvasRef = useRef(null);
  const imageRef = useRef(null);
 const handleChange = (e) => {
  setImagePath(URL.createObjectURL(e.target.files[0]));
 }
 const handleClick = () => {
  Tesseract.recognize(
    imagePath,
    'ben',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
    setText(text)
  })
 }
  return (
    <div className="App">
      <main>
        <h3>Uploaded Image</h3>
        <img src={imagePath} className="App-logo2" alt="logo" />
        <h3>Extracted text</h3>
        <div className='text-box'>
          <p>{text}</p>
        </div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}>convert to text</button>
        </main>
    </div>
  );
}

export default App;
