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
  profile?: string;
  title: string;
  description?: string;
  date: number;
  img?: string;
  tags?: string[];
}) {
  // const currentDate = new Date(date);
  const currentDate = new Date(date); // Convert Unix timestamp to milliseconds
  return (
    <div
      className='w-3/4 flex justify-center items-center p-4 md:px-32 my-4 text-xs md:text-base'
      key={id}
    >
      <div className='flex flex-col rounded-md p-4'>
        <a href={`/blogpage/${id}`}>
          <div className='flex items-center'>
            <BsPersonCircle className='text-xl' />
            <h6 className='text-lg font-bold ml-2'>{profile}</h6>
          </div>
          <h2 className='text-lg font-semibold my-1'>{title}</h2>
          <p className=' text-gray-500 line-clamp-2'>{description}</p>
        </a>
        <div className='flex md:justify-between text-gray-500 md:mt-3'>
          <div className='flex gap-3'>
            <p className=''>
              {currentDate.getUTCDate()}/<span>{currentDate.getMonth()}</span>/
              <span>{currentDate.getFullYear()}</span>
            </p>
            <p className=''>{`${currentDate.getHours()}:${currentDate.getMinutes()}`}</p>
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
        className='w-[100px] h-[100px] md:h-auto object-contain ml-2 md:ml-14'
      />
    </div>
  );
}
