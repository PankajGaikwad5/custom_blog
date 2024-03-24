import React from 'react';
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='w-full font-semibold bg-gray-800 p-4 text-white'>
      <ul className='flex flex-col items-end mb-4'>
        <a
          href='#'
          className='flex items-center text-blue-600 hover:text-white duration-300'
        >
          <FaPhoneAlt className='mr-1' />
          <span className='ml-1 '>xxxxxxx </span>
        </a>
        <a
          href='#'
          className='flex items-center text-blue-600 hover:text-white duration-300'
        >
          <MdOutlineMail className='mr-1 text-lg' />
          <span className='ml-1 '>xx@xxx.com </span>
        </a>
      </ul>
      <div className='flex justify-between'>
        <h1 className=''> &copy; 2023</h1>
        <ul className='flex items-center space-x-4'>
          <li className='text-xl  hover:text-blue-600 duration-300'>
            <a href='#'>
              <FaFacebook />
            </a>
          </li>
          <li className='text-xl  hover:text-blue-600 duration-300'>
            <a href='#'>
              <FaInstagram />
            </a>
          </li>
          <li className='text-xl  hover:text-blue-600 duration-300'>
            <a href='#'>
              <FaLinkedin />
            </a>
          </li>
          <li className='text-xl  hover:text-blue-600 duration-300'>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
