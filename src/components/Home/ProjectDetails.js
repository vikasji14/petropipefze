// import React from 'react'

// const ProjectDetails = () => {
//     return (
//         <div className='grid md:grid-cols-4 sm:grid-cols-1 p-6 md:pl-48 md:pr-48 gap-6'>
//         <div className='relative text-center md:border-r md:border-gray-300 pr-4'>
//           <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
//             Projects
//           </div>
//           <div className='text-[100px] font-extrabold text-gray-200'>220</div>
//         </div>
//         <div className='relative text-center md:border-r md:border-gray-300 pr-4'>
//           <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
//             People
//           </div>
//           <div className='text-[100px] font-extrabold text-gray-200'>51</div>
//         </div>
//         <div className='relative text-center md:border-r md:border-gray-300 pr-4'>
//           <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
//             Years
//           </div>
//           <div className='text-[100px] font-extrabold text-gray-200'>7</div>
//         </div>
//         <div className='relative text-center'>
//           <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
//             Offices
//           </div>
//           <div className='text-[100px] font-extrabold text-gray-200'>10</div>
//         </div>
//       </div>
//     )
// }

// export default ProjectDetails










import React, { useEffect, useState } from 'react';

const ProjectDetails = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [officesCount, setOfficesCount] = useState(0);

  const counts = {
    projects: 220,
    people: 51,
    years: 7,
    offices: 10,
  };

  useEffect(() => {
    const animateCount = (targetCount, setCount) => {
      let count = 0;
      const increment = Math.ceil(targetCount / 100); 
      const interval = setInterval(() => {
        count += increment;
        if (count >= targetCount) {
          count = targetCount;
          clearInterval(interval);
        }
        setCount(count);
      }, 100); 
    };

    animateCount(counts.projects, setProjectCount);
    animateCount(counts.people, setPeopleCount);
    animateCount(counts.years, setYearsCount);
    animateCount(counts.offices, setOfficesCount);
  }, []);

  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-1 p-6 md:pl-48 md:pr-48 gap-6'>
      <div className='relative text-center md:border-r md:border-gray-300 pr-4'>
        <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
          Projects
        </div>
        <div className='text-[100px] font-extrabold text-gray-200'>{projectCount}</div>
      </div>
      <div className='relative text-center md:border-r md:border-gray-300 pr-4'>
        <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
          People
        </div>
        <div className='text-[100px] font-extrabold text-gray-200'>{peopleCount}</div>
      </div>
      <div className='relative text-center md:border-r md:border-gray-300 pr-4'>
        <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
          Years
        </div>
        <div className='text-[100px] font-extrabold text-gray-200'>{yearsCount}</div>
      </div>
      <div className='relative text-center'>
        <div className='absolute inset-0 flex items-center justify-center text-black font-bold'>
          Offices
        </div>
        <div className='text-[100px] font-extrabold text-gray-200'>{officesCount}</div>
      </div>
    </div>
  );
}

export default ProjectDetails;
