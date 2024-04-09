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
import { getServerSession } from 'next-auth';
import Tiptap from './TipTap';
import { useRouter } from 'next/navigation';

const convertToBase64 = (file: any) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export default function BlogForms({ user }: { user: string }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [blog, setBlog] = useState('');
  const [tags, setTags] = useState(['']);
  // const [profile, setProfile] = useState('');
  const profile = user;
  const [error, setError] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const form = useForm<z.infer<typeof blogSchema>>({
    // mode: onchange,
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      description: '',
      blog: '',
      tags: [''],
      image: '',
    },
  });

  const handleContentChange = (reason: any) => {
    setBlog(reason);
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
    console.log(base64);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description || !blog) {
      setError('all fields are necessary');
      return;
    }

    let formData: any = {
      title,
      description,
      blog,
      tags,
      profile,
      image,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create the topic');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className='w-3/4 grid place-items-center p-10'>
      <Form {...form}>
        <div className='w-full md:w-4/6 shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
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
              name='description'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    <Input
                      type='text'
                      placeholder='Description'
                      {...field}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                  <p className='font-semibold'>Blog</p>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    {/* <Textarea
                      value={blog}
                      onChange={(e) => setBlog(e.target.value)}
                      placeholder='Enter your Blog here'
                      rows={5}
                      {...field}
                    /> */}
                    <Tiptap
                      content={blog}
                      onchange={(newContent: string) =>
                        handleContentChange(newContent)
                      }
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
              name='image'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    {/* <Input placeholder='shadcn' {...field} /> */}

                    <Input
                      type='file'
                      placeholder='Tags here'
                      {...field}
                      // value={tags.join(',')}
                      onChange={(e) => handleFileUpload(e)}
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

            {error && (
              <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                {error}
              </div>
            )}
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
