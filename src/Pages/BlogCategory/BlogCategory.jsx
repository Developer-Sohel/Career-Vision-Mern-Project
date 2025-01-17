import React from 'react'
import '../BlogCategory/category.css'

const BlogCategory = () => {
  return (
    <div className='container mx-auto md:px-24 py-16 px-3'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-7'>

            <div className=' category rounded-lg lg:flex gap-4 '>
                <img src="bananr1.jpg" className='md:w-36 w-full rounded-xl' alt="" />
                <h1 className='items-center flex text-xl font-medium text-slate-900'>Most powerful job in the world</h1>
                
            </div>

            <div className=' category rounded-lg lg:flex gap-4 '>
                <img src="E-commerce-web.jpg" className='md:w-36 w-full rounded-xl' alt="" />
                <h1 className='items-center flex text-xl font-medium text-slate-900'>E-commerce Business</h1>
                
            </div>

            <div className=' category rounded-lg lg:flex gap-4 '>
                <img src="Web development.jpg" className='md:w-36 w-full rounded-xl' alt="" />
                <h1 className='items-center flex text-xl font-medium text-slate-900'>Web Development</h1>
                
            </div>

            <div className=' category rounded-lg lg:flex gap-4 '>
                <img src="Content-creation.jpg" className='md:w-36 w-full rounded-xl' alt="" />
                <h1 className='items-center flex text-xl font-medium text-slate-900'>
                    Content Creator
                </h1>
                
            </div>
        </div>
    </div>
  )
}

export default BlogCategory