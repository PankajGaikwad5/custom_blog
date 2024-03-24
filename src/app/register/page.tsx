import { FormComponent } from '@/components/FormComponent';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <div>
      <FormComponent register={true} />
    </div>
  );
}

export default page;
