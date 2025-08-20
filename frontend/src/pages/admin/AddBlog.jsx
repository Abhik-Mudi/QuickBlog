import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'


const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null);

  useEffect(() => {
    // initiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        // modules: {
        //   toolbar: [
        //     [{ header: [1, 2, 3, false] }],
        //     ['bold', 'italic', 'underline', 'strike'],
        //     [{ color: [] }, { background: [] }],
        //     [{ list: 'ordered' }, { list: 'bullet' }],
        //     [{ align: [] }],
        //     ['blockquote', 'code-block'],
        //     ['link', 'image'],
        //     ['clean']
        //   ]
        // }
      })
    }
  }, [])


  return (
    <div className='bg-white rounded-2xl p-6 shadow'>
      <h2 className='text-lg font-semibold mb-4'>Add New Blog</h2>
      <form style={{ padding: '10px', alignItems: 'unset' }} className='flex flex-col gap-3'>
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='h-16' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" className='hidden cursor-pointer' />
        </label>
        <p>Blog Title</p>
        <label htmlFor="title">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='border p-2 w-3/4 rounded' placeholder='Title' />
        </label>
        <p>Blog Subtitle</p>
        <label htmlFor="subtitle">
          <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className='border p-2 w-3/4 rounded' placeholder='Subtitle' />
        </label>
        <p>Blog Category</p>
        <label htmlFor="category">
          <input value={category} onChange={(e) => setCategory(e.target.value)} className='border p-2 w-3/4 rounded' placeholder='Category' />
        </label>
        <p>Blog Description</p>
        <label htmlFor="content">
          <div className=' border w-3/4 rounded'>
          <div ref={editorRef} className='min-h-45 border'></div>
          </div>
        </label>
        <div className='flex gap-2'>
          <button className='bg-[#5044E5] text-white px-4 py-2 rounded'>Publish</button>
          <button className='border px-4 py-2 rounded'>Save draft</button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog
