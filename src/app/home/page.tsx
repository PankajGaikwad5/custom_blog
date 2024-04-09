import BlogListComponent from '../../components/BlogListComponent';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/components/authOptions';
import { Button } from '@/components/ui/button';

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog`, {
      method: 'GET',
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('failed to fetch topics');
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Blog() {
  const session = await getServerSession(authOptions);
  const { blog } = await getTopics();
  return (
    <>
      <div className='flex items-end text-end justify-end px-24'>
        <a href='/uploadblog'>
          <Button className='bg-green-600 m-2'>NEW POST</Button>
        </a>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {blog.map((item: any) => {
          return (
            <BlogListComponent
              key={item._id}
              id={item._id}
              profile={item.profile}
              description={item.description}
              title={item.title}
              img={item.image}
              date={item.createdAt}
              tags={item.tags}
            />
          );
        })}
      </div>
    </>
  );
}
