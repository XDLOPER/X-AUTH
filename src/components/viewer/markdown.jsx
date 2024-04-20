import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function MarkdownViewer({ filePath }) {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(text => {
        setMarkdownContent(text);
      })
      .catch(error => console.error('Error loading Markdown:', error));
  }, [filePath])

  return (
    <div className="markdown-viewer">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  )
}

export default MarkdownViewer