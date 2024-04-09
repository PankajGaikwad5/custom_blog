import BlogForms from '@/components/BlogForms';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/components/authOptions';

export default async function UploadBlog() {
  const session = await getServerSession(authOptions);
  console.log(session.user.username);
  return (
    <div className='flex justify-center'>
      <BlogForms user={session.user.email} />
    </div>
  );
}
