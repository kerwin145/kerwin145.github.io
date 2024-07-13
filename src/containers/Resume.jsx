import React from 'react'
import './Resume.css'
import { ResumeJune24 } from '../Pdfs'

const Resume = () => {
  const pdfStr = `${ResumeJune24}#view=FitH`
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