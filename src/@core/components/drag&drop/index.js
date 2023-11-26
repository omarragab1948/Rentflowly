import React, { useState } from 'react'
import upload from 'public/images/pages/upload.svg'
import Image from 'next/image'
import { useSettings } from 'src/@core/hooks/useSettings'

const ImageUploader = () => {
  const [files, setFiles] = useState([])
  const { settings } = useSettings()
  const mode = settings.mode

  const handleDrop = e => {
    e.preventDefault()

    const newFiles = [...files]
    const droppedFiles = [...e.dataTransfer.files]

    // Add dropped files to the state
    setFiles([...newFiles, ...droppedFiles])
  }

  const handleFileInputChange = e => {
    const selectedFiles = [...e.target.files]

    // Add selected files to the state
    setFiles([...files, ...selectedFiles])
  }

  const handleUploadButtonClick = () => {
    // Implement your file upload logic here
    // You can use the 'files' state to access the selected/uploaded files
    console.log('Uploading files:', files)

    // Reset the state after uploading if needed
    setFiles([])
  }

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius: '6px'
        }}
        onClick={() => document.querySelector('input[type=file]').click()}
      >
        <Image src={upload} alt='upload' />
        <p
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
            fontFamily: 'Public Sans'
          }}
        >
          Drag and drop your image here
        </p>
        <input type='file' onChange={handleFileInputChange} style={{ display: 'none' }} multiple />
        <h6
          style={{
            fontSize: '15px',
            fontWeight: '400',
            color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C',
            fontFamily: 'Public Sans'
          }}
        >
          or
        </h6>
        <button
          onClick={() => document.querySelector('input[type=file]').click()}
          style={{
            color: '#7367F0',
            padding: '10px 15px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: 'rgba(115, 103, 240, 0.16)',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '500',
            fontFamily: 'Public Sans'
          }}
        >
          Browse image
        </button>
      </div>
      {files.length > 0 && (
        <>
          <div>
            <h3 style={{ color: mode === 'dark' ? 'rgba(208, 212, 241, 0.78)' : '#4B465C' }}>Selected Files:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {files.map((file, index) => (
                <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`thumbnail-${index}`}
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                  <p>{file.name}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleUploadButtonClick}
            style={{
              color: '#7367F0',
              padding: '10px 15px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'rgba(115, 103, 240, 0.16)',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '500'
            }}
          >
            Upload
          </button>
        </>
      )}
    </div>
  )
}

export default ImageUploader
