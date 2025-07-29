// src/components/Node.jsx
import React from 'react'
import '../styles/global.css'

export default function Node({ node, onSelect }) {
  return (
    <div className="container centered">
      <p className="node-text">{node.text}</p>
      <div className="options">
        {node.options.map((opt, idx) => (
          <button
            key={idx}
            className="button button-primary"
            // Aquí pasamos también opt.tag
            onClick={() => {
              console.log(opt.next, opt.tag)
              onSelect(opt.next, opt.tag)}}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
