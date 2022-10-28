import React , {useState, useEffect} from 'react'

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([{
        body:
        "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque" ,
        author: "Jeff Bezos",
        image: "",
        _id: 0
    }])
    

    console.log(testimonial[0].body)

  return (
    <div className='text-white h-screen mt-60'>

    <h1 className='text-lg md:text-4xl text-center m-auto font-bold text-gold mb-10'>Témoignages </h1>
    {testimonial.map(item => 

    <section key={item._id} className="flex flex-col w-1/2 m-auto">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='fill-gold w-1/6'>
        <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
        </svg>
        <p>
            {item.body}
        </p>

        <aside className='flex justify-end'>
            <h2 className='text-2xl'>- {item.author}</h2>
        </aside>

    </section>
    )
    }

    
    </div>
  )
}

export default Testimonial