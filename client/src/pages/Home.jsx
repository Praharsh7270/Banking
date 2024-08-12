import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import img1 from '../images/bank_home.png';
import img2 from '../images/easy.png'
import img3 from '../images/fast.png'
import img4 from '../images/secure.png'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
      <div className='flex flex-col lg:flex-row items-center'>
  <div className='lg:w-1/2'>
    <h1 className='text-3xl font-bold lg:text-6xl text-blue-500 dark:text-purple-600 '>Welcome to <span className='dark:text-yellow-200 text-green-400'>Pra</span> Bank</h1>
    <p className='text-gray-500 text-xs sm:text-sm'>
      Effortless Banking at Your Fingertips
    </p>
  </div>
  <div className='lg:w-1/2'>
    <img src={img1} alt='bank' className='w-full h-full' />
  </div>
</div>

        
      </div>

      <div className='flex flex-col items-center'>
  <h1 className='text-xl font-bold lg:text-3xl text-center mb-8 underline'>Our Quality</h1>
  <div className='flex flex-wrap justify-center gap-y-20 gap-x-8'>
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
      <img src={img2} alt="Easy to use" className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">Easy to use</h3>
     
    </article>
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
      <img src={img4} alt="Easy to use" className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">Secured</h3>
      
    </article>
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
      <img src={img3} alt="Easy to use" className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">Work fastly</h3>
    </article>
  </div>
</div>


      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
