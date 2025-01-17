import React, { useEffect, useState } from 'react';
import LatestSingleBooks from './LatestSingleBooks/LatestSingleBooks';

const category = ['Chose a category', 'Business', 'Jobs', 'Career'];

const LatestBlog = () => {
  const [lblog, setLblog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Chose a category');

  useEffect(() => {
    fetch('lblog.json')
      .then(res => res.json())
      .then((data) => setLblog(data));
  }, []);

  const filteredBlog = selectedCategory === 'Chose a category'
    ? lblog
    : lblog.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='container mx-auto md:px-24 md:py-16 px-3'>
      <h1 className='text-xl font-medium tracking-wider leading-7 text-slate-500'>Our Latest Blog</h1>

      {/* Category filter */}
      <div className='py-8 flex gap-5'> 
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          name='category'
          id='category'
          className='border bg-[#EAEAEA] border-gray-300 rounded-md focus:outline-none'
        >
          {category.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
         <h1 className='flex items-center bg-orange-400 px-2 py-2 rounded-md text-white font-bold'> {selectedCategory.length}</h1>
          
      </div>

      {/* Display filtered blogs */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 space-y-6'>
      {filteredBlog.map((blog, index) => (
       
       <LatestSingleBooks key={index} blog={blog}/>
      
    ))}
      </div>
    </div>
  );
};

export default LatestBlog;

