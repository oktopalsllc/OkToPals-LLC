const Footer = () => {
  return (
    <div className='text-white bg-black px-4 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <a
            href='/'
            aria-label='Go home'
            title='Company'
            className='inline-flex items-center'
          >
            <svg
              className='w-8 text-[#bba14f]'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>

            <span class='ml-2 text-xl font-bold tracking-wide text-[#bba14f] uppercase'>
              <strong>OkTo</strong>
              <span className='inline-block text-white'>
                <em>Pals</em>
              </span>
            </span>
          </a>
          <div className='mt-6 lg:max-w-sm'>
            <p className='text-sm'>
              Software Development Company and the core focus is to build useful
              and easy-to-use software solutions for our customers.
            </p>
            <p className='mt-4 text-sm'>
              This means that our company is focused on developing software
              products or services that meet the specific needs of our customers
              and provide excellent customer service.
            </p>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide text-[#bba14f]'>
            Contacts
          </p>
          <div className='flex'>
            <p className='mr-1 text-[#bba14f]'>Phone:</p>
            <a
              href='tel:850-123-5021'
              aria-label='Our phone'
              title='Our phone'
              className='transition-colors duration-300'
            >
              +1 754-216-3930
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 text-[#bba14f]'>Email:</p>
            <a
              href='mailto:contact@oktopals.com'
              aria-label='Our email'
              title='Our email'
              className='transition-colors duration-300'
            >
              contact@oktopals.com
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 text-[#bba14f]'>Address:</p>
            <a
              href='https://www.google.com/maps'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Our address'
              title='Our address'
              className='transition-colors duration-300'
            >
              4451, Telfair Boulevard, APT 4119 Camp Springs Maryland, USA.
            </a>
          </div>
        </div>
        <div>
          {/* <span className='text-base font-bold tracking-wide text-gray-900'>
            S
          </span> */}
          <div className='flex items-center mt-1 space-x-3'>
            <a
              href='https://twitter.com/oktopals'
              className='text-[#bba14f] transition-colors duration-300 '
              title='Twitter'
            >
              <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/company/oktopalsllc/'
              className='text-[#bba14f] transition-colors duration-300 '
            >
              <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                <circle cx='15' cy='15' r='4' />
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href='https://web.facebook.com/profile.php?id=100095411712753'
              className='text-[#bba14f] transition-colors duration-300 '                
              title='Facebook'
            >
              <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
              </svg>
            </a>
          </div>
          <p className='mt-4 text-sm text-[#bba14f]'></p>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm text-[#bba14f]'>
          © Copyright 2023 OKTOPALS LLC Inc. All rights reserved.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <a
              href='/'
              className='text-sm text-[#bba14f] transition-colors duration-300 '
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href='/'
              className='text-sm text-[#bba14f] transition-colors duration-300 '
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='/'
              className='text-sm text-[#bba14f] transition-colors duration-300 '
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
