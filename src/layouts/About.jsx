const About = () => {
  return (
    <div className='w-full h-screen pt-10 bg-[#0a192f] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className="sm:text-right pb-8 pl-4;">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold my-auto'>
            <p>Hi, I&apos;m Kyung Kwon. Please take a look around.</p>
          </div>
          <p>I&apos;m deeply passionate about the art of Full Stack Development. With a strong foundation in both front-end and back-end technologies, I thrive on crafting seamless digital experiences from start to finish. My journey in the world of coding has equipped me with the skills to build dynamic and responsive web applications that cater to a diverse range of user needs.</p>
        </div>

      </div>
    </div>

  );
};

export default About;