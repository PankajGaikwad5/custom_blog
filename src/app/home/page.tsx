import BlogListComponent from '../../components/BlogListComponent';

export default function Blog() {
  return (
    <div className='flex flex-col justify-center '>
      <BlogListComponent
        id={1}
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
      />
    </div>
  );
}
