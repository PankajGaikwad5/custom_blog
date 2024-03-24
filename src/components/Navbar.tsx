'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../app/api/auth/[...nextauth]/authOptions';

type Props = {};

const Navbar = async (props: Props) => {
  const list = ['home', 'projects', 'videos'];
  const [nav, setNav] = React.useState(false);
  const session = await getServerSession(authOptions);

  return (
    <div className='fixed w-full bg-[#FFC017] text-5xl text-black border-b-2 border-black p-5 z-10'>
      <div className='flex justify-between'>
        <a href='./'>
          <h1 className='text-xl'>HEADER</h1>
        </a>
        <ul className='hidden md:flex space-x-4 text-lg'>
          {list.map((list, index) => {
            return (
              <li
                className='uppercase hover:text-blue-400 duration-200'
                key={index}
              >
                <a href={`/${list}`}>{list}</a>
              </li>
            );
          })}
          {session ? (
            <button
              className='uppercase hover:text-blue-400 duration-200'
              onClick={() => signOut()}
            >
              logout
            </button>
          ) : (
            <li className='uppercase hover:text-blue-400 duration-200'>
              <a href={`/`}>login</a>
            </li>
          )}
        </ul>
        <div
          className={`md:hidden cursor-pointer navMenu z-20 ${nav && 'open'}`}
          onClick={() => setNav(!nav)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={
            !nav
              ? 'absolute w-full h-screen top-0 left-0 -translate-x-full flex flex-col justify-center items-center duration-500'
              : 'absolute w-full h-screen top-0 left-0 flex flex-col md:hidden justify-center items-center bg-[#0a192f] z-10 duration-500 text-white'
          }
        >
          {list.map((list, index) => {
            return (
              <li
                className='text-4xl py-6 transition-all hover:border-b-2 border-white duration-100 cursor-pointer uppercase'
                key={index}
                onClick={() => setNav(!nav)}
              >
                <a href={`/${list}`}>{list}</a>
              </li>
            );
          })}
          <li
            className='text-4xl py-6 transition-all hover:border-b-2 border-white duration-100 cursor-pointer uppercase'
            onClick={() => setNav(!nav)}
          >
            <a href={`/`}>login</a>
          </li>
          <li
            className='text-4xl py-6 transition-all hover:border-b-2 border-white duration-100 cursor-pointer uppercase'
            onClick={() => {
              setNav(!nav);
              signOut();
            }}
          >
            logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
