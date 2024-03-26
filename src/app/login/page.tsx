import React from 'react';
import { FormComponent } from '../../components/FormComponent';
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
      <FormComponent />
    </div>
  );
}

// export default page;
