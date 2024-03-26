import { BsPersonCircle } from 'react-icons/bs';
import { PiHandsClappingLight } from 'react-icons/pi';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoPlayCircleOutline } from 'react-icons/io5';
import './index.scss';
import { MarkdownToHtml } from '../../../components/MarkdownComponent';
// import './index.scss';
import {
  markdownContentTitle,
  markdownContentDesc,
  markdownContentBlog,
} from '../../../components/markdownContent';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../components/authOptions';
import { redirect } from 'next/navigation';

export default async function BlogPage() {
  //   const markdownContent: string = `## Ask vs guess culture
  // This is a **sample** Markdown content rendered with Showdown.js in Next.js.
  //   `;
  const title = MarkdownToHtml(markdownContentTitle);
  const desc = MarkdownToHtml(markdownContentDesc);
  const currentDate = new Date();
  const iconClasses =
    'cursor-pointer text-gray-800 hover:text-gray-600 text-2xl';
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect('/');
  // }

  return (
    <div className='flex justify-center p-2'>
      <div className='md:w-1/2 flex flex-col'>
        <div className='blog_title'>
          <div dangerouslySetInnerHTML={{ __html: title }} />
          {/* <h1>Ask vs guess culture</h1> */}
          <div dangerouslySetInnerHTML={{ __html: desc }} />
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            voluptates mollitia deleniti esse libero voluptatum dolorem dolorum
            ratione eius modi quasi debitis dolor. Excepturi qui sapiente
            explicabo vitae ab minima.
          </p> */}
        </div>

        <div className='flex my-4 items-center'>
          <BsPersonCircle className='text-4xl' />
          <div className='flex flex-col mx-4'>
            <p className='capitalize'>full name</p>
            <p>
              {currentDate.getHours()}h {currentDate.getMinutes()}m
            </p>
          </div>
          <div className='flex flex-col'>
            <button className='text-left text-green-800 hover:text-green-600 duration-300 capitalize'>
              follow
            </button>
            <p>{currentDate.getDate()}d ago</p>
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
        <div className='font-semibold'>
          {/* <div className='blog_content' />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          adipisci corrupti eius illo quisquam, voluptas vero nobis vel maxime
          consequatur fugit unde quas libero perferendis nulla voluptates quam
          harum earum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci incidunt nisi inventore modi commodi impedit minima similique
          ea atque voluptates quam autem exercitationem pariatur porro, aliquid
          aperiam neque! Natus, sunt? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum cumque laudantium commodi quisquam explicabo
          dignissimos, cupiditate atque maxime? Aliquam impedit iure illum
          veniam harum! A quod quis in sit placeat?. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Provident adipisci corrupti eius illo
          quisquam, voluptas vero nobis vel maxime consequatur fugit unde
          quasarum! A quod quis in sit placeat? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          adipisci corrupti eius illo quisquam, voluptas vero nobis vel maxime
          consequatur fugit unde quas libero perferendis nulla voluptates quam
          harum earum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci incidunt nisi inventore modi commodi impedit minima similique
          ea atque voluptates quam autem exercitationem pariatur porro, aliquid
          aperiam neque! Natus, sunt? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum cumque laudantium commodi quisquam explicabo
          dignissimos, cupiditate atque maxime? Aliquam impedit iure illum
          veniam harum! A quod quis in sit placeat?. */}
          <div
            className='blog_content'
            dangerouslySetInnerHTML={{ __html: markdownContentBlog }}
          />
        </div>
      </div>
    </div>
  );
}
