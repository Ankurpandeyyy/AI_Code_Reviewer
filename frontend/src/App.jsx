import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Editor from "react-simple-code-editor"
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css";


const App = () => {

  const[code , setCode]= useState(`function sum() {
    return 1 + 1 ;
    }`)
  useEffect(() => {
    prism.highlightAll()
  } , [])

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  async function ReviewCode(){
    // const response = await axios.post('http://localhost:3000/ai/get-review' , {code})

    const response = await axios.post(`${BASE_URL}/ai/get-review`, { code });

     setreview(response.data)
  }

  const[review , setreview] = useState(``)
  
  
  function clearScreen(){
  setCode(``);
  setreview(``);
  }


  return (
    <>
    <div className="bg-amber-50 flex justify-items-normal gap-1 justify-evenly">
      <div className="p-2 w-[50%] h-screen bg-black border-2 rounded-2xl flex flex-col overflow-auto">
      <div className="text-green-400 font-mono text-sm mb-2">/* Paste your code here - Below is sample code (Clear the screen first) */</div>
       <div className='h-[88%] w-full text-white overflow-auto scrollbar-hide' style={{ overflowX: 'auto' }}>
        <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                
                overflow: "auto",
                whiteSpace: 'pre'
              }}
            />
       </div>
       
        <div className="flex justify-end mt-2 overflow-auto gap-3">
          <button onClick={clearScreen} className=' px-7 py-2  rounded-2xl font-bold bg-blue-400 cursor-pointer overflow-auto'>Clear</button>
    <button
      onClick={ReviewCode}
      className="px-7 py-2 rounded-2xl font-bold bg-blue-400 cursor-pointer overflow-auto"
    >
      Review
    </button>
  </div>
      </div>
      <div className="p-2 w-[50%] h-screen bg-neutral-500 border-2 rounded-2xl overflow-auto font-bold flex flex-col">
       <div className="text-black font-mono text-sm mb-2">/* AI Review Below (Improvement and Fixes available) */</div>
      <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </div>
    </>
  )
}

export default App
