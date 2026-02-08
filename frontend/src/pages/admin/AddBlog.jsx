import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import useAddBlog from '../../hooks/useAddBlog'
import toast from 'react-hot-toast'
import ReactMarkdown from 'react-markdown'


const AddBlog = () => {
  const {isPublishing, addBlog} = useAddBlog();

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null);
  const [mode, setMode] = useState('rich'); // 'rich' or 'markdown'
  const [markdownContent, setMarkdownContent] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    let content = '';
    
    if (mode === 'rich') {
      content = quillRef.current.root.innerHTML;
    } else {
      console.log(markdownContent);
      
      content = markdownContent;
    }

    if(!title || !category || !image || !content || !subtitle){
      return toast.error("All the fields are required")
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("contentType", mode);
    formData.append("image", image);

    await addBlog(formData)
  }

  useEffect(() => {
    if (mode === 'rich' && !quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
          ]
        }
      })
    }
  }, [mode])


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
          <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='border p-2 w-3/4 rounded' placeholder='Title' />
        </label>
        <p>Blog Subtitle</p>
        <label htmlFor="subtitle">
          <input name='subtitle' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className='border p-2 w-3/4 rounded' placeholder='Subtitle' />
        </label>
        <p>Blog Category</p>
        <label htmlFor="category">
          <input name='category' value={category} onChange={(e) => setCategory(e.target.value)} className='border p-2 w-3/4 rounded' placeholder='Category' />
        </label>
        <p>Blog Description</p>
        <div className='flex gap-2 mb-3'>
          <button 
            type='button'
            onClick={() => setMode('rich')}
            className={`px-4 py-2 rounded text-sm font-medium ${mode === 'rich' ? 'bg-[#5044E5] text-white' : 'border bg-gray-100'}`}
          >
            Rich Text
          </button>
          <button 
            type='button'
            onClick={() => setMode('markdown')}
            className={`px-4 py-2 rounded text-sm font-medium ${mode === 'markdown' ? 'bg-[#5044E5] text-white' : 'border bg-gray-100'}`}
          >
            Markdown
          </button>
        </div>
        <label htmlFor="content">
          <div className=' border md:w-3/4 w-full rounded'>
            {mode === 'rich' ? (
              <div ref={editorRef} className='min-h-96 border'></div>
            ) : (
              <textarea
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                placeholder='Write your content in Markdown format...'
                className='w-full min-h-96 p-3 focus:outline-none resize-none'
              />
            )}
          </div>
        </label>
        {mode === 'markdown' && markdownContent && (
          <div className='md:w-3/4 w-full'>
            <p className='text-md font-semibold mb-2'>Preview:</p>
            <div className='rich-text border p-4 rounded bg-gray-50'>
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        )}
        <div className='flex gap-2'>
          <button onClick={(e)=>handleSubmit(e)} className={`bg-[#5044E5] text-white px-4 py-2 rounded`}>
            <div class={`w-4 h-4 border-4 border-blue-500 border-t-transparent rounded-full ${isPublishing ? 'animate-spin':'hidden'}`}></div>
            <div className={isPublishing ? 'hidden':'block'}>Publish</div>
          </button>
          <button type='button' className='border px-4 py-2 rounded'>Save draft</button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog
