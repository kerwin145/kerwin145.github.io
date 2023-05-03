import React from 'react'
import './CommPortfolio.css'
import { PdfPanel } from '../components/PdfPanel'
import { PressRelPrev, UserInstrPrev, CollabProjPrev } from '../images'
import { CollaborativeProject, PressRelease, UserInstructions } from '../Pdfs'

const CommPortfolio = () => {
  return (
    <div className="commPortfolio">
        <div className="commPortfolio-header">
          <h1>Technical Communications Portfolio</h1>
          <h3>A synopsis of my work in CSE300, Technical Communications!</h3>
        </div>
        <div className="commPortfolio-projects">
          <PdfPanel
              title = "Press Release"
              content = {
                <>
                  <p>In this document, I reported on the upcoming Stony Brook University Orchestra concert. As a member in the past semesters, I can say with certainty that a lot of effort was spent putting the program together.</p>
                  <p>This concert was particularly special because it was the annual family concert, meaning that the program would be comprised of familiar pieces that even non-classical-music enthusiasts would recognize.</p>
                </>
              }
              imgSrc = {PressRelPrev}
              pdfLink = {PressRelease}
              borderColor= "var(--main-bg)"
            />
            <PdfPanel
              title = "User Instructions"
              content = {
                <>
                  <p>This instruction manual will teach users, regardless of background, how to make a simple static HTML page. It covers basic setup with VsCode, essential terminology, and images for reference.</p>
                  <p>The resulting static webpage can link to other pages, and contains headers, paragraphs, and lists. </p>
                </>
              }
              imgSrc = {UserInstrPrev}
              pdfLink = {UserInstructions}
              borderColor= "var(--primary)"
            />
            <PdfPanel
              title = "Collaborative Problem-Solving Project"
              content = {
                <>
                  <p>For this project, I worked with three other students to find improvements for on campus fast travel.</p>
                  <p>We analyzed the shortcoming of public bikes and buses, and evaluate the efficacy of possible  hardware/software solutions</p>
                </>
              }
              imgSrc = {CollabProjPrev}
              pdfLink = {CollaborativeProject}
              borderColor= "var(--accent)"
            />
        </div>
      
    </div>
  )
}

export default CommPortfolio