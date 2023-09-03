import React from 'react'
import './Resume.css'
import { ResumeAug23 } from '../Pdfs'

const Resume = () => {
  const pdfStr = `${ResumeAug23}#view=FitH`
  return (
    <div className="resume">
        <h1>Resume</h1>
        <div className="resume-content">
            <object
                type = "application/pdf"
                data = {pdfStr}
                className = "resume-preview"
                >
            </object>
          </div>
    </div>
  )
}

export default Resume