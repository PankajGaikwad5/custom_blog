'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from './Toolbar';
import Underline from '@tiptap/extension-underline';
// import Blockquote from '@tiptap/extension-blockquote';
// import Heading from '@tiptap/extension-heading';

const Tiptap = ({ content, onchange }: any) => {
  const handleChange = (newContent: string) => {
    onchange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          'flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium text-[16px] text-black pt-4 rounded-bl-none rounded-br-md outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  // return <EditorContent editor={editor} className='' />;
  return (
    <div className='w-full px-4'>
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: 'pre-line' }} editor={editor} />
    </div>
  );
};

export default Tiptap;
