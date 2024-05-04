import '../styles/components/sidebar.sass'

import cv from '../cv/CV_Bruno_Oliveira.docx'

const DownloadButton = () => {
  return (
      <a href={cv} download='CV' className="btn download-button">
          Download Currículo
      </a>
  )
}

export default DownloadButton
