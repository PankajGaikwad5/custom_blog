import { BsPersonCircle } from 'react-icons/bs';
import { PiHandsClappingLight } from 'react-icons/pi';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoPlayCircleOutline } from 'react-icons/io5';
import AddComment from '@/components/AddComment';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/components/authOptions';
import { getBlogById } from '@/components/getBlogById';
import LikesComponent from '@/components/LikesComponent';

export default async function BlogPage({ params }: { params: any }) {
  const session = await getServerSession(authOptions);
  const iconClasses =
    'cursor-pointer text-gray-800 hover:text-gray-600 text-2xl';

  const { id } = params;
  const { blog } = await getBlogById(id);

  const date = blog.createdAt;
  const currentDate = new Date(date);

  return (
    <div className='flex justify-center p-2'>
      <div className='md:w-1/2 flex flex-col'>
        <div className='text-[2.25rem] font-bold leading-10'>
          <h1>{blog.title}</h1>
          <p className='text-lg leading-7 mt-2 mb-2 text-gray-700 dark:text-gray-500'>
            {blog.description}
          </p>
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
            <LikesComponent id={id} />
            <a href='#comments'>
              <div className='flex space-x-2'>
                <FaRegComments className={iconClasses} />

                <p
                  className={
                    'cursor-pointer text-gray-800  hover:text-gray-600'
                  }
                >
                  {blog.comments.length}
                </p>
              </div>
            </a>
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
            className='my-4'
            dangerouslySetInnerHTML={{ __html: blog.blog }}
          />
        </div>
        <section id='comments'>
          <AddComment id={id} user={session.user.username} />
          {blog.comments.map((item: any) => {
            return (
              <div className='my-4  border-2 rounded-lg p-4' key={item.id}>
                <div className='flex items-center gap-2'>
                  <BsPersonCircle className='text-xl' />
                  <h6 className='text-lg font-bold '>{item.profile}</h6>
                </div>
                <p className=' text-gray-500 line-clamp-2'>{item.comment}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
