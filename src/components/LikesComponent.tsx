import { getBlogById } from './getBlogById';
import { PiHandsClappingLight } from 'react-icons/pi';
export default async function LikesComponent({ id }: { id: any }) {
  const { blog } = await getBlogById(id);
  let likesCount = blog.likes;

  const liked = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ likes: likesCount + 1 }),
        }
      );
      if (!res.ok) {
        throw new Error('failed to update comments');
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className='flex mr-4 space-x-2'>
      <PiHandsClappingLight className='cursor-pointer text-gray-800 hover:text-gray-600 text-2xl' />
      <p className={'cursor-pointer text-gray-800  hover:text-gray-600'}>
        {blog.likes ? likesCount : 0}
      </p>
    </button>
  );
}
