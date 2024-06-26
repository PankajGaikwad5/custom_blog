'use client';

import { type Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from 'lucide-react';
import { Toggle } from './ui/toggle';
import { Button } from './ui/button';

type Props = {
  editor: Editor | null;
  content: string;
};

export function Toolbar({ editor, content }: Props) {
  if (!editor) {
    return null;
  }
  return (
    <div className='px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700'>
      <div className='flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap'>
        {/* Bold */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive('bold')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Bold className='w-5 h-5' />
        </Button>
        {/* Italic */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive('italic')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Italic className='w-5 h-5' />
        </Button>
        {/* Strikethrough */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive('strike')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Strikethrough className='w-5 h-5' />
        </Button>
        {/* Underline */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive('underline')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Underline className='w-5 h-5' />
        </Button>

        {/* Code */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCode().run();
          }}
          className={
            editor.isActive('code')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Code className='w-5 h-5' />
        </Button>
        {/* Undo */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive('undo')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Undo className='w-5 h-5' />
        </Button>
        {/* Redo */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive('redo')
              ? 'bg-sky-700 text-white  rounded-lg'
              : 'text-sky-400'
          }
        >
          <Redo className='w-5 h-5' />
        </Button>
      </div>
    </div>
  );
}
