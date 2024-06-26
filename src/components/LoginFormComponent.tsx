'use client';

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
import { FormEvent, useState } from 'react';
import { loginSchema, registerSchema } from './loginSchema';

export function LoginFormComponent({ register }: { register?: boolean }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  // 1. Define your form.

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
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
          body: JSON.stringify({ email }),
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
          body: JSON.stringify({ email, username, password }),
        });

        if (res.ok) {
          setEmail('');
          setUsername('');
          setPassword('');
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
          email,
          password,
          redirect: false,
        });
        if ((res as any).error) {
          setError('Invalid Credentials');
          return;
        }
        console.log(email, password);
        router.replace('home');
      } catch (error) {
        console.log(error);
      }
      console.log('workin');
    }
  };
  return (
    <div className='w-full h-screen grid place-items-center px-10'>
      {register ? (
        <Form {...registerForm}>
          <div className='w-full md:w-2/6 shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4 text-center'>
              {register ? 'Register' : 'Login'}
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <FormField
                control={registerForm.control}
                name='email'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      {/* <Input placeholder='shadcn' {...field} /> */}

                      <Input
                        type='email'
                        placeholder='set your email'
                        {...field}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name='password'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      {/* <Input placeholder='shadcn' {...field} /> */}

                      <Input
                        type='text'
                        placeholder='set your username'
                        {...field}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name='password'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='set your password'
                        {...field}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
      ) : (
        <Form {...loginForm}>
          <div className='w-full md:w-2/6 shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4 text-center'>
              {register ? 'Register' : 'Login'}
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <FormField
                control={loginForm.control}
                name='email'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      {/* <Input placeholder='shadcn' {...field} /> */}

                      <Input
                        type='email'
                        placeholder='enter your email'
                        {...field}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={loginForm.control}
                name='password'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='enter your password'
                        {...field}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
      )}
    </div>
  );
}
