import { LoginFormComponent } from '../components/LoginFormComponent';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../components/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/home');
  }
  return (
    <div>
      <LoginFormComponent />
    </div>
  );
}
