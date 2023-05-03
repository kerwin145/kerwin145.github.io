import React from 'react'
import './PdfPanel.css'

export const PdfPanel = ({title, content, imgSrc, pdfLink, borderColor}) => {
  return (
    <div className="pdfPanel" style = {{border:`1px solid ${borderColor}`}}>
        <h1>{title}</h1>
        {content}
        <a href={pdfLink}  target="_blank" rel="noopener noreferrer"><img src = {imgSrc}/></a>
        <div className="pdfPanel-viewdoc">
            <a href={pdfLink}  target="_blank" rel="noopener noreferrer">View Document</a>
        </div>
    </div>
  )
}
