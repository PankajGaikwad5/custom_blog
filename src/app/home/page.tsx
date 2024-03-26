import BlogListComponent from '../../components/BlogListComponent';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/components/authOptions';

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
    <div className='flex flex-col justify-center '>
      {blog.map((item: any) => {
        return (
          <BlogListComponent
            key={item._id}
            id={item._id}
            profile={session.username}
            description={item.description}
            title={item.title}
            img={
              'https://miro.medium.com/v2/resize:fill:200:134/1*RI-yJwMtTsycOmC2Nh-JJw.png'
            }
            date={new Date().getTime()}
            tags={item.tags}
          />
        );
      })}
      {/* <BlogListComponent
        id={2}
        profile={'username...'}
        description={
          'description Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos.'
        }
        title={'Lorem ipsum dolor sit amet consectetur'}
        img={
          'https://miro.medium.com/v2/resize:fill:200:134/1*RI-yJwMtTsycOmC2Nh-JJw.png'
        }
        date={new Date().getTime()}
        tags={['tags here']}
      />
      <BlogListComponent
        id={3}
        profile={'username...'}
        description={
          'description Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos.'
        }
        title={'Lorem ipsum dolor sit amet consectetur'}
        img={
          'https://miro.medium.com/v2/resize:fill:200:134/1*RI-yJwMtTsycOmC2Nh-JJw.png'
        }
        date={new Date().getTime()}
        tags={['tags here']}
      />
      <BlogListComponent
        id={4}
        profile={'username...'}
        description={
          'description Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos.'
        }
        title={'Lorem ipsum dolor sit amet consectetur'}
        img={
          'https://miro.medium.com/v2/resize:fill:200:134/1*RI-yJwMtTsycOmC2Nh-JJw.png'
        }
        date={new Date().getTime()}
        tags={['tags here']}
      /> */}
    </div>
  );
}
