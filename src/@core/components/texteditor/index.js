import React, { useEffect } from 'react'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'

const MyQuillEditor = ({ direction }) => {
  useEffect(() => {
    // Create a new instance of Quill when the component mounts
    const editorElement = document.createElement('div')
    document.getElementById('quill-container').appendChild(editorElement)

    const quill = new Quill(editorElement, {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['image', 'code-block'],
          ['link'],
          [{ list: 'ordered' }, { list: 'bullet' }]
        ]
      }
    })

    // Handle changes in the editor content
    quill.on('text-change', () => {
      // Access the editor content using quill.root.innerHTML
      const content = quill.root.innerHTML
      console.log(content)
    })
  }, [])

  return <div id='quill-container' style={{ height: '400px', direction: direction }} />
}

export default MyQuillEditor
