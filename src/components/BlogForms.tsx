'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { blogSchema } from './blogSchema';
import { FormEvent, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function BlogForms() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [blog, setBlog] = useState('');
  const [tags, setTags] = useState(['']);
  const [profile, setProfile] = useState('');

  const form = useForm<z.infer<typeof blogSchema>>({
    // mode: onchange,
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      desc: '',
      blog: '',
      tags: [''],
    },
  });

  //   function handleSubmit(values: z.infer<typeof blogSchema>) {
  // console.log('workin')
  //   }

  const handleSubmit = (e: FormEvent) => {
    console.log('working');
  };
  return (
    <main className='w-full h-screen grid place-items-center px-10'>
      <Form {...form}>
        <div className='w-full md:w-2/6 shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
          <h1 className='text-xl font-bold my-4 text-center'>
            Upload new blog
          </h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    <Input
                      type='text'
                      placeholder='Title'
                      {...field}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
              control={form.control}
              name='desc'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    <Input
                      type='text'
                      placeholder='Description'
                      {...field}
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
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
              control={form.control}
              name='blog'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Blog</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    <Textarea
                      value={blog}
                      onChange={(e) => setBlog(e.target.value)}
                      placeholder='Enter your Blog here'
                      rows={5}
                      {...field}
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
              control={form.control}
              name='tags'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    <Input
                      type='text'
                      placeholder='Tags here'
                      {...field}
                      value={tags.join(',')}
                      onChange={(e) => setTags(e.target.value.split(','))}
                    />
                  </FormControl>
                  {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* {error && (
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
            </div> */}
            <Button
              type='submit'
              className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'
            >
              Submit
            </Button>
          </form>
        </div>
      </Form>
    </main>
  );
}
