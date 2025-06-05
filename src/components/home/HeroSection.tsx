import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CountUp from '@/components/ui/count-up';
import heroBlob from '@/assets/hero-blob.svg';
import heroSideImage from '@/assets/hero-side-image.jpeg';

const HeroSection = () => {
  return (
    <div className="relative -mt-5 h-[200vh]">
      {/* Background Image - Fixed within this component */}
      <div className="sticky top-0 left-0 w-full h-screen z-0 overflow-hidden">
        {/* <Image
          src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1920&q=80"
          alt="Learning background"
          fill
          priority
          className="object-cover brightness-[0.4]"
          sizes="100vw"
        /> */}
        <div className="absolute inset-0 dark:bg-primary/0 mix-blend-multiply"></div>
      </div>

      {/* First Screen - Hero Content */}
      <div className="absolute top-16 lg:top-0 left-0 lg:left-16 w-full h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-start lg:justify-start z-10">
        <div className="container mx-auto px-4 ">
          <div className="max-w-3xl xl:max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r dark:from-navy-200 from-navy-800 dark:to-navy-300 to-navy-900 bg-clip-text text-transparent leading-tight py-1">
              NextGenAI Tutors: Smarter Learning, Brighter Futures
            </h1>
            <h2 className="text-xl md:text-2xl xl:text-3xl mb-5">
              Australia&apos;s Leading AI-Powered Online Tutoring Platform.
            </h2>
            <div className='xl:max-w-3xl mx-auto'>
              <p className='text-xs md:text-sm mb-10'>
               We&apos;ve brought together <strong>Australia&apos;s finest educators with advanced AI technology</strong> to create a truly personalised and effective online learning experience for students of all ages.
{/* From mastering core subjects to acing competitive exams and building future-ready skills, we&apos;re here to guide your child to success, affordably and conveniently. */}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4 mt-10">
              <Link href="/contact-us">
                <Button size={"lg"} className="text-lg text-white dark:bg-white dark:text-navy-600 dark:hover:bg-white/90 transition-transform hover:scale-105 duration-300">
                  Book a Demo Today
                </Button>
              </Link>

              <Link href="/about-us">
                <Button size="lg" variant="outline" className="text-lg px-[45px] bg-transparent border-navy-600 dark:border-white text-navy-600 dark:text-white hover:bg-white/30 hover:text-white transition-transform hover:scale-105 duration-300">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Image with blob mask */}
        <div className="flex justify-center items-center relative mt-6 lg:mt-0">
          <div className="relative w-[600px] h-[400px] xl:w-[800px] xl:h-[600px] 2xl:w-[800px] 2xl:h-[600px]">
            {/* SVG Mask - Using the blob as a mask */}
            <div className="absolute inset-0 w-full h-full" style={{
              maskImage: `url(${heroBlob.src})`,
              WebkitMaskImage: `url(${heroBlob.src})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}>
              <Image
                src={heroSideImage}
                alt="Learning illustration"
                fill
                className="object-cover scale-[0.75] dark:brightness-[0.9]"
                sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 800px"
              />
            </div>

            {/* Optional: Show the blob outline */}
            {/* <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <Image
                src={heroBlob}
                alt=""
                fill
                className="object-contain opacity-30"
                sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 800px"
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Second Screen - Stats Card */}
      <div className="absolute top-screen left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="dark:bg-white/10 backdrop-blur-md p-10 rounded-xl max-w-3xl mx-auto dark:border border-2 dark:border-white/20 border-navy-900 text-primary dark:text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-extrabold">
                  <CountUp
                    from={0}
                    to={97}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>%</span>
                </p>
                <p className="mt-2">Student Satisfaction</p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-extrabold">
                  <CountUp
                    from={0}
                    to={500}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>+</span>
                </p>
                <p className="mt-2">Tutoring Hours</p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-extrabold">
                  <CountUp
                    from={0}
                    to={95}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>%</span>
                </p>
                <p className="mt-2 ">Grade Improvement</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/about-us">
                <Button size="lg" className="text-lg bg-navy-600 text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;