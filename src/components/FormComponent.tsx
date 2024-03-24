'use client';

// import { z } from "zod"

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  passwords: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function FormComponent({ register }: { register?: boolean }) {
  const [username, setUsername] = useState('');
  const [passwords, setPasswords] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      passwords: '',
    },
  });

  // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !passwords) {
      setError('All fields are necessary');
      return;
    }

    if (register) {
      try {
        const resUserExists = await fetch('api/userExists', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });

        const { user } = await resUserExists.json();
        if (user) {
          setError('user already exists');
          return;
        }

        const res = await fetch('api/register', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ username, passwords }),
        });

        if (res.ok) {
          // const formTarget = e.target;
          // formTarget.reset();
          setUsername('');
          setPasswords('');
          router.push('/');
        } else {
          console.log('user registeration failed');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await signIn('credentials', {
          username,
          passwords,
          redirect: false,
        });
        if (res.error) {
          setError('Invalid Credentials');
          return;
        }
        console.log(username, passwords);
        router.replace('home');
      } catch (error) {
        console.log(error);
      }
      console.log('workin');
    }
  };
  return (
    <div className='w-full h-screen grid place-items-center px-10'>
      <Form {...form}>
        <div className='w-full md:w-2/6 shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
          <h1 className='text-xl font-bold my-4 text-center'>
            {register ? 'Register' : 'Login'}
          </h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}
                    {register ? (
                      <Input
                        placeholder='set your username'
                        {...field}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    ) : (
                      <Input
                        placeholder='enter your username'
                        {...field}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    )}
                  </FormControl>
                  {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='passwords'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passwords</FormLabel>
                  <FormControl>
                    {register ? (
                      <Input
                        type='password'
                        placeholder='set your passwords'
                        {...field}
                        value={passwords}
                        onChange={(e) => setPasswords(e.target.value)}
                      />
                    ) : (
                      <Input
                        type='password'
                        placeholder='enter your passwords'
                        {...field}
                        value={passwords}
                        onChange={(e) => setPasswords(e.target.value)}
                      />
                    )}
                  </FormControl>
                  {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                {error}
              </div>
            )}
            <div className='text-end'>
              {register ? (
                <a
                  href='/login'
                  className='text-blue-700 font-bold py-2 hover:text-black dark:hover:text-white duration-300'
                >
                  Already have an account? Login here!
                </a>
              ) : (
                <a
                  href='/register'
                  className='text-blue-700 font-bold py-2 hover:text-black dark:hover:text-white duration-300'
                >
                  Don't have an account? Register here!
                </a>
              )}
            </div>
            <Button
              type='submit'
              className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'
            >
              Submit
            </Button>
          </form>
        </div>
      </Form>
    </div>
  );
}
