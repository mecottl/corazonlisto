import React from 'react'
import '../styles/global.css'

export default function Node({ node, onSelect }) {
  return (
    <div className="container centered">
      <p className="node-text">{node.text}</p>
      <div className="options">
        {node.options.map((opt, idx) => (
          <button
            key={`${node.id}-${idx}`}
            className="button button-primary"
            onClick={() => onSelect(opt.next)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}