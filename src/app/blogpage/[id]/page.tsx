import { BsPersonCircle } from 'react-icons/bs';
import { PiHandsClappingLight } from 'react-icons/pi';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoPlayCircleOutline } from 'react-icons/io5';
import './index.scss';

export default async function BlogPage({ params }: { params: any }) {
  const iconClasses =
    'cursor-pointer text-gray-800 hover:text-gray-600 text-2xl';

  const getBlogById = async (id: any) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${id}`,
        {
          cache: 'no-store',
        }
      );
      if (!res.ok) {
        throw new Error('Failed to fetch blog');
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  const { id } = params;
  const { blog } = await getBlogById(id);
  const date = blog.createdAt;
  const currentDate = new Date(date);

  return (
    <div className='flex justify-center p-2'>
      <div className='md:w-1/2 flex flex-col'>
        <div className='blog_title'>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>

        <div className='flex my-4 items-center'>
          <BsPersonCircle className='text-4xl' />
          <div className='flex flex-col mx-4'>
            <p className=''>{blog.profile}</p>
            <p>
              {currentDate.getHours()}:{currentDate.getMinutes()}
            </p>
          </div>
          <div className='flex flex-col'>
            <button className='text-left text-green-800 hover:text-green-600 duration-300 capitalize'>
              follow
            </button>
            {/* <p>{currentDate.getDate()}d ago</p> */}
            <p>
              {currentDate.getUTCDate()}/<span>{currentDate.getMonth()}</span>/
              <span>{currentDate.getFullYear()}</span>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between py-4 my-2 border-y-2 border-gray-200'>
          <div className='flex'>
            <div className='flex mr-4 space-x-2'>
              <PiHandsClappingLight className={iconClasses} />
              <p
                className={'cursor-pointer text-gray-800  hover:text-gray-600'}
              >
                2.9k
              </p>
            </div>
            <div className='flex space-x-2'>
              <FaRegComments className={iconClasses} />
              <p
                className={'cursor-pointer text-gray-800  hover:text-gray-600'}
              >
                67
              </p>
            </div>
          </div>
          <div className='flex space-x-2'>
            <MdOutlineBookmarkAdd className={iconClasses} />
            <IoPlayCircleOutline className={iconClasses} />
            <RiShareForwardLine className={iconClasses} />
          </div>
        </div>
        <div className='text-center flex justify-center'>
          {blog.image && (
            <img src={blog.image} alt='' className='w-[600px] h-[600px] m-4' />
          )}
        </div>
        <div className='font-semibold'>
          <div
            className='blog_content'
            dangerouslySetInnerHTML={{ __html: blog.blog }}
          />
        </div>
      </div>
    </div>
  );
}
