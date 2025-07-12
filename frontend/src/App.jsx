import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Editor from "react-simple-code-editor"
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'

const App = () => {

  const[code , setCode]= useState(`function sum() {
     return 1+1 ;}`)
  useEffect(() => {
    prism.highlightAll()
  } , [])

  return (
    <>
    <div className="bg-amber-50 flex justify-items-normal gap-1 justify-evenly">
      <div className="p-2 w-6/12 h-screen bg-black border-2 rounded-2xl">
       <div className='h-11/12 w-12/12'>
        <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
       </div>
       <button className= 'px-7 py-2.5 relative left-10/12 top-2 rounded-2xl font-bold bg-blue-300 cursor-pointer'>Review</button>
      </div>
      <div className="p-2 w-6/12 h-screen bg-gray-500 border-2 rounded-2xl"></div>
    </div>
    </>
  )
}

export default App
