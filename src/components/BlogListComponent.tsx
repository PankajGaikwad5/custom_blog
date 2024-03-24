import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { RiShareForwardLine } from 'react-icons/ri';
export default function BlogListComponent({
  id,
  profile,
  title,
  description,
  date,
  img,
  tags,
}: {
  id: number;
  profile: string;
  title: string;
  description: string;
  date: number;
  img: string;
  tags: string[];
}) {
  const currentDate = new Date(date);
  return (
    <div className='w-full flex justify-center md:items-start p-4 md:px-32 my-4 text-xs md:text-base'>
      <div className='flex flex-col'>
        <a href={`/blogpage/${id}`}>
          <div className='flex items-center'>
            <BsPersonCircle className='text-xl' />
            <h6 className='text-sm ml-2'>{profile}</h6>
          </div>
          <h2 className='text-lg font-semibold my-1'>{title}</h2>
          <p className='hidden md:block text-gray-500'>{description}</p>
        </a>
        <div className='flex md:justify-between text-gray-500 md:mt-3'>
          <div className='flex'>
            <p className='mr-3'>{currentDate.getUTCDate()}d</p>
            <p className='mr-3'>{`${currentDate.getHours()}:${currentDate.getMinutes()}`}</p>
            <p>{tags}</p>
          </div>
          <div className='flex'>
            <button className='px-3 hover:text-blue-600 duration-300'>
              <RiShareForwardLine />
            </button>
            <button className='px-3 hover:text-blue-600 duration-300'>
              <MdOutlineBookmarkAdd />
            </button>
          </div>
        </div>
      </div>
      <img
        src={img}
        alt=''
        className='w-[100px] md:w-auto h-[100px] md:h-auto object-contain ml-2 md:ml-14'
      />
    </div>
  );
}
