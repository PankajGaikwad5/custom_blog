'use client';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Textarea } from './ui/textarea';

export default function AddComment({ id, user }: { id: any; user: any }) {
  const profile = user;
  const [postComment, setPostComment] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const comment = {
      profile: profile,
      comment: postComment,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(comment),
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
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-4'>
      <Textarea
        placeholder='comment your thoughts'
        value={postComment}
        onChange={(e) => setPostComment(e.target.value)}
      />
      <Button>Submit</Button>
    </form>
  );
}
