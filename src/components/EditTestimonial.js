import React, { useState } from 'react'

const EditTestimonial = ({testimonials, selectedId, handleCloseSecondSection, refresh, setRefresh}) => {

    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")

  return (
    <div className=' p-10 flex flex-col w-full h-screen'>

    
        <label for="author" className='text-gold text-lg mb-5'>Author</label>
        <input className="p-5" type="text" defaultValue={testimonials[selectedId].author} onChange={e => setAuthor(e.target.value)} name="author" />
        <label for="body" className='text-gold text-lg my-5' >Message</label>
        <textarea className='h-1/2 p-5' type="text" defaultValue={testimonials[selectedId].body} onChange={e => setBody(e.target.value)} name="body"/>
    
    </div>
  )
}

export default EditTestimonial