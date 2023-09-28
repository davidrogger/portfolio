
import { useEffect } from 'react';

import { userLanguageContext } from '@/contexts/language';
import { updateTabTitle } from '@/services/handleTitle';

import jobImg from '../images/clean_computer.png';
import dvdImg from '../images/dvd.jpeg';
import helloGif from '../images/hello-world.gif';

export function Home(){
  const { content: { section }, portfolioName } = userLanguageContext();

  useEffect(() => {
    const tabTitle = `${portfolioName} - ${section.home.sectionName}`;
    updateTabTitle(tabTitle);
  }, []);
  return (
    <div
      className='flex flex-col gap-2'
    >
      <div
        className='flex items-center border rounded p-8'
      >
        <div className='w-2/3'>
          <h1
            className='text-2xl mb-5'
          >
            {`${section.home.intro} 🤓`}
          </h1>
          <p
            className='text-justify leading-relaxed indent-5'
          >
            {section.home.start}
          </p>
        </div>
        <img
          src={dvdImg}
          alt="david image"
          className='rounded-full overflow-auto p-8'
        />
      </div>

      <div
        className='flex items-center border rounded p-8'
      >
        <img
          src={jobImg}
          alt="david image"
          className='rounded-full w-[45%] p-12'
        />
        <div className='w-[55%]'>
          <p
            className='text-justify leading-relaxed indent-5'
          >
            {section.home.middle}
          </p>
        </div>
      </div>

      <div
        className='flex items-center border rounded p-8'
      >
        <div className='w-[65%]'>
          <p
            className='text-justify leading-relaxed indent-5'
          >
            {section.home.end}
          </p>
        </div>
        <img
          src={helloGif}
          alt="david image"
          className='rounded-full w-[35%] p-8'
        />
      </div>
    </div>
  );
}