"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillMediumSquare, AiFillMail } from 'react-icons/ai';
import { BiLogoReact, BiLogoJava, BiLogoPython, BiLogoJavascript, BiLogoAngular, BiLogoNodejs, BiLogoSpringBoot, BiLogoMongodb, BiLogoCss3, BiLogoTailwindCss, BiLogoBootstrap } from 'react-icons/bi';
import { GoRuby } from "react-icons/go";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiApachemaven, SiExpress, SiNumpy, SiPandas, SiMysql, SiHtml5, SiRubyonrails } from 'react-icons/si';
import yarzar from '../../public/yarzar.jpeg';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import pizza from '../../public/pizza1.png';
import Traffic from '../../public/Traffic.png';
import FlySmart from '../../public/FlySmart2.png';
import portfolio from '../../public/Portfolio1.png';

const handleScrollToSection = (sectionId: string) => (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            {/* <h1 className='text-xl font-dancing dark:text-white '> <a href='#'> Hi, I'm Kshitij</a>  </h1> */}
            <nav className='hidden lg:block md:block'>
              <ul className='flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4' >
                <li className='hover:text-purple-500'> <a href='#about' onClick={handleScrollToSection('about')}>About</a> </li>
                <li className='hover:text-purple-500'> <a href='#skills' onClick={handleScrollToSection('skills')}>Skills</a> </li>
                <li className='hover:text-purple-500'> <a href='#experience' onClick={handleScrollToSection('experience')}>Experience</a> </li>
                <li className='hover:text-purple-500'> <a href='#projects' onClick={handleScrollToSection('projects')}>Projects</a> </li>
                <li className='hover:text-purple-500'> <a href='#contact' onClick={handleScrollToSection('contact')}>Contact</a> </li>
              </ul>
            </nav>
            <ul className='flex items-center justify-end'>
              <li> <a
                href="https://drive.google.com/file/d/13RElfpw3nzaV2RKwv10Mxpj_Va3yzrNY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <button className='bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-2 text-white rounded-sm ml-8'>Resume </button> </a></li>
            </ul>
          </nav>
          <div className='text-center p-10 ' id='about'>
            <h2 className='text-5xl py-10 text-purple-900 font-medium dark:text-gradient-to-r from-purple-700 to-purple-500 md:text-6xl'>
              <Typewriter
                options={{
                  strings: [
                    "Hi I'm Yarzar Minwai"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  skipAddStyles: true,
                  deleteSpeed: 50,
                }}
              />
            </h2>
            <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>
              Experienced back-end software engineer skilled in Ruby on Rails and Next.js, dedicated to creating accessible and user-friendly web applications.
            </p>
            <div className='text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
              <a href='https://twitter.com/Yarzarminwai' className='hover:text-purple-500'><AiFillTwitterCircle /></a>
              <a href='https://www.linkedin.com/in/yarzar-minwai/ ' className='hover:text-purple-500'><AiFillLinkedin /></a>
              <a href='https://www.youtube.com/@yarzarminwai6087' className='hover:text-purple-500'><AiFillYoutube /></a>
              <a href='https://github.com/yarzardev' className='hover:text-purple-500'><AiFillGithub /></a>
              <a href='mailto:yarzarminwai97@gmail.com' className='hover:text-purple-500'><AiFillMail /></a>
            </div>
            <div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96'>
                <Image src={yarzar} fill={true} alt='Defauly image' />
              </div>
            </div>
          </div>
        </section>
        <div id='skills' >
          <div>
            <h1 className='text-5xl py-3 text-black dark:text-gray-200'> My Skills</h1>
          </div>
          <div className='text-center p-10 rounded-xl'>
            <div className='flex flex-wrap justify-center'>
              <div className='p-2 text-xl dark:text-gray-200'><GoRuby className='w-40 h-40 text-purple-500 md:w-40 md:h-40 lg:w-48 lg:h-48' />Ruby</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoJavascript className='w-40 h-40 text-purple-500 md:w-40 md:h-40 lg:w-48 lg:h-48' />Javascript</div>
            </div>
            <div className='flex flex-wrap justify-center gap-2'>
              <div className='p-2 text-sm dark:text-gray-200'><SiHtml5 className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />HTML</div>
              <div className='p-2 text-sm dark:text-gray-200'><BiLogoCss3 className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />CSS</div>
              <div className='p-2 text-sm dark:text-gray-200'><BiLogoTailwindCss className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />Tailwind CSS</div>
              <div className='p-2 text-sm dark:text-gray-200'><BiLogoBootstrap className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />Bootstrap</div>
              <div className='p-2 text-sm dark:text-gray-200'><DiJqueryLogo className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />JQuery</div>
              <div className='p-2 text-sm dark:text-gray-200'><SiRubyonrails className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />Ruby on rails</div>
              <div className='p-2 text-sm dark:text-gray-200'><TbBrandNextjs className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />NextJS</div>
              <div className='p-2 text-sm dark:text-gray-200'><SiMysql className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />MySQL</div>
              <div className='p-2 text-sm dark:text-gray-200'><FaGithub className='w-10 h-10 text-purple-500 md:w-10 md:h-10 lg:w-18 lg:h-18' />Git</div>
            </div>
          </div>
        </div>
        {/* <section id='services'>
          <div>
            <h3 className='text-5xl py-3 mb-6 dark:text-white'>Services I Offer</h3>
            <p className='text-2xl py-2 leading-8 text-grey-800 dark:text-gray-200'>
              As a Full Stack Developer and Machine Learning Enthusiast I offer the following services:
            </p>
            <ul className='text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 text-justify list-disc ml-9 '>
              <li className='my-4'> <span className='text-purple-500'>Full Stack Web Development  </span> : I can design and develop responsive web applications using modern frameworks like Angular and React, backed by efficient server-side implementations using Spring Boot, Express, and Node.js.</li>
              <li className='my-4'> <span className='text-purple-500'>Data Analysis and Extraction  </span> : With my knowledge in Python, data science, and machine learning, I can assist businesses in extracting meaningful insights from large datasets, performing exploratory data analysis, and developing predictive models. </li>
              <li className='my-4'> <span className='text-purple-500'>Database Design and Implementation  </span>: I can design and implement efficient database solutions using MongoDB, ensuring data integrity and scalability for web applications and data-driven systems</li>
              <li className='my-4'> <span className='text-purple-500'>API Development  </span>: I have experience in building RESTful APIs using frameworks like Express and Spring Boot, enabling seamless communication between front-end and back-end systems.</li>
              <li className='my-4'>  <span className='text-purple-500'>Technical Consulting  </span> : I can provide technical guidance and consulting services, helping businesses make informed decisions regarding technology stack selection, architecture design, and best practices for software development projects.</li>
              <li className='my-4'>  <span className='text-purple-500'>Continuous Improvement and Optimization  </span> : I am dedicated to continuously improving the performance and scalability of applications, optimizing code, and staying updated with the latest industry trends and best practices.</li>
            </ul>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
              <div className='flex justify-center flex-col items-center '>
                <Image src={design} width={100} height={100} alt='default image'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Full Stack Web Development</h3>
                <p className='py-2'>Front-end and back-end development, covering the complete technology stack from user interface to server-side logic and database management. </p>
                <h4 className='py-4 text-purple-500 dark:text-gray-300'>Technologies I Use</h4>
                <p className='text=grey-800 py-1'>React</p>
                <p className='text=grey-800 py-1'>Spring Boot</p>
                <p className='text=grey-800 py-1'>MongoDB</p>
                <p className='text=grey-800 py-1'>Express Js</p>
                <p className='text=grey-800 py-1'>Node Js</p>
              </div>
            </div>
            <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
              <div className='flex justify-center flex-col items-center '>
                <Image src={code} width={100} height={100} alt='default image'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Machine Learning</h3>
                <p className='py-2'>Developing algorithms and models that enable computers to learn and make predictions or decisions without being explicitly programmed.</p>
                <h4 className='py-4 text-purple-500 dark:text-gray-300'>Technologies I Use</h4>
                <p className='text=grey-800 py-1'>Python</p>
                <p className='text=grey-800 py-1'>Pandas</p>
                <p className='text=grey-800 py-1'>Numpy</p>
                <p className='text=grey-800 py-1'>Matplotlib</p>
                <p className='text=grey-800 py-1'>Seaborn</p>
              </div>
            </div>
            <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
              <div className='flex justify-center flex-col items-center '>
                <Image src={consulting} width={100} height={100} alt='default image'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Software Development</h3>
                <p className='py-2'>Designing, coding, testing, and maintaining computer programs and applications to meet specific user or business requirements.</p>
                <h4 className='py-4 text-purple-500 dark:text-gray-300'>Technologies I Use</h4>
                <p className='text=grey-800 py-1'>Java</p>
                <p className='text=grey-800 py-1'>GitHub</p>
                <p className='text=grey-800 py-1'>Docker</p>
                <p className='text=grey-800 py-1'>Kubernetes</p>
                <p className='text=grey-800 py-1'>Jenkins</p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className='py-10' id='projects'>
          <div>
            <h3 className='text-5xl py-2 mb-6 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
              My portfolio is a collection of diverse work samples that reflect my expertise and experience in <span className='text-purple-500'> Full Stack development and Machine Learning </span> .
              It includes a range of projects, such as <span className='text-purple-500'> Pizzeria-react-app , FlySmart , Medical Insurance Premium prediction , Intelligent Traffic Managment System, Portfolio Website </span>
              each demonstrating my creativity, problem-solving abilities, and professional growth.
            </p>
            <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
              Through my portfolio, I aim to present the quality of my work and provide potential employers, clients, or collaborators
              with a comprehensive understanding of my capabilities.
              It not only highlights my past achievements but also offers insights into my thought process,
              approach to projects, and overall professional development. By exploring my portfolio,
              you will gain a deeper understanding of my skills and be able to assess my suitability for your specific needs.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 '>
              <a href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app' className='relative'>
                <Image src={pizza} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={100} height={100} title='Checkout code on Github' alt='Checkout Code on Github'/>
                <div className='absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click Me to Checkout Code on Github
                  </p>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              <a href='https://github.com/Kshitij-Darwhekar/kshitijdarwhekar.io' className='relative'>
                <Image src={portfolio} className='rounded-lg object-cover ' width={100} height={100} title='Checkout code on Github' alt='Checkout Code on Github'/>
                <div className='absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-black mb-32 hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click Me to Checkout Code on Github
                  </p>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1 '>
              <a href='https://github.com/WebDesgns/Flight-Management-System' className='relative'>
                <Image src={FlySmart} className='rounded-lg object-cover ' width={100} height={100} title='Checkout Code on Github' alt='Checkout Code on Github'/>
                <div className='absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-black hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click Me to Checkout Code on Github
                  </p>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative'>
              <a href='https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision' className='relative opacity-100 hover:opacity-50 transition-opacity duration-150'>
                <Image src={Traffic} className='rounded-lg object-cover  ' width={100} height={100} title='Checkout code on Github' alt='Checkout code on Github'/>
              </a>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl '>
                  Click Me to Checkout Code on Github
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}


