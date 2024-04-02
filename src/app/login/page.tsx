import React from 'react';
import { LoginFormComponent } from '../../components/LoginFormComponent';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../components/authOptions';

type Props = {};

export default async function Login({}: Props) {
  // const session = await getServerSession(authOptions);
  // if (session) {
  //   redirect('/home');
  // }
  return (
    <div>
      <LoginFormComponent />
    </div>
  );
}

// export default page;
