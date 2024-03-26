import { FormComponent } from '@/components/FormComponent';
import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../components/authOptions';

type Props = {};

export default async function Register({}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/home');
  }
  return (
    <div>
      <FormComponent register={true} />
    </div>
  );
}

// export default Register;
