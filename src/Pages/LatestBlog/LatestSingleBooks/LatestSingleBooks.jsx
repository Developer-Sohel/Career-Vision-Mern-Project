
const LatestSingleBooks = ({blog}) => {
  return (
    <div className="px-3
    ">
       
        <div className="category">
            <img src={blog.img} className="h-52 w-full rounded-xl" alt="" />
            <div className="px-3">

            <div className="flex justify-between">
            <h1 className="font-bold tracking-wider leading-6">{blog.title}</h1>
            <span className="font-medium tracking-wider text-green-400">{blog.category}</span>
            </div>
            <p>{blog.description}</p>
            <div className="flex justify-between">
                <h2>Author Name : {blog.author_name}</h2>
                
            </div>
           <div className="flex">
           <button className="inline-block w-full bg-green-600 mb-1 mt-4 py-2 rounded-md text-white font-medium tracking-wider">View More ➤ 
           </button>
           
           </div>
            </div>
            
        </div>
    </div>
  )
}

export default LatestSingleBooks