import BlogCategory from '../BlogCategory/BlogCategory';
import '../Home/home.css'
import { Carousel } from "flowbite-react";
import LatestBlog from '../LatestBlog/LatestBlog';

const Home = () => {
  return (
    <div className='bg-img'>

<div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div>
            <img src="bananr1.jpg" className='' alt="" />
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div>
            <img src="bananr1.jpg" alt="" />
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div>
            <img src="bananr1.jpg" alt="" />
          </div>
        </div>
      </Carousel>
    </div>

    <BlogCategory/>
    <LatestBlog/>
       
    </div>
  )
}

export default Home