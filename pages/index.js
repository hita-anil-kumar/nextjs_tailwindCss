import Image from 'next/image'
import Link from 'next/link';
import pictureArray from "../assets/pictureArray.png";
import ellipse from "../assets/ellipse.png";
import externalLink from "../assets/externalLink.png";
import fourCircles from "../assets/fourCircles.png";
import graph from "../assets/graph.png";
import house from "../assets/house.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import questionMark from "../assets/questionMark.png";
import footerLogo from "../assets/footerLogo.png";
import Nav from "../components/Nav.js";
import 'remixicon/fonts/remixicon.css'


export default function Home() {
  return (
  <div className="w-full bg-gradient-to-r from-rangoon via-tuna to-rhino">
    <div className="w-full h-6 bg-gradient-to-r from-navLine1 to-navLine2 w-full">
    </div>
    <div className="mt-42 mx-20">
      <Image
      src={pictureArray}
      alt="Picture array"
      width={1750}
      height={332}
      />
    </div>
    {/* <div className='flex justify-center -mt-1/20 ml-[16px]'>
      <div className="w-1/2 h-1/2"> */}
    <div className='flex justify-center -mt-1/14 ml-3/500 '>
      <div className="w-1/10 h-1/10">
      <Image
      src={ellipse}
      alt="Ellipse"
      className=" cursor-pointer hover:border-4 hover:border-blue-500 rounded-full"
      />
    </div>
    </div>

    <h1 className="mt-26 font-Manrope font-extrabold text-45 leading-61 text-center text-white">Lorem ipsum</h1>    
    <p className="mt-6 font-Manrope text-16 leading-20 text-center text-[#F3F3F3]">Created by: <span className='text-redpink'>Lorem ipsum</span></p>
    <p className="mt-10 font-Manrope text-16 leading-22 text-center text-white">Sed ut percpiciatis unde omnis iste natus error sit voluptatem</p>
      
    <div className='flex justify-center mt-61 flex-wrap'>
      <button className="w-184 h-50 bg-woodsmoke bg-opacity-50 rounded-4 m-10 border-2 border-transparent hover:border-redpink hover:b">
        <div className="flex pl-34">
        <Image
        src={graph}
        alt="Graph"
        width={15}
        height={16}
        />
        <p className="ml-6 font-Manrope not-italic font-extrabold text-15 leading-20 text-center text-[#F7F7F7]">Lorem ipsum</p>
        </div>
      </button>
      <button className="w-184 h-50 bg-woodsmoke rounded-4 m-10 border-2 border-transparent hover:border-redpink">
        <div className="flex pl-34"> 
        <Image
        src={fourCircles}
        alt="Four circles"
        width={15}
        height={16}
        />
        <p className="ml-6 font-Manrope not-italic font-extrabold text-15 leading-20 text-center text-[#F7F7F7]">Lorem ipsum</p>
        </div>
      </button>
      <button className="w-184 h-50 bg-woodsmoke bg-opacity-50 rounded-4 m-10 border-2 border-transparent hover:border-redpink">
        <div className="flex pl-34">
        <Image
        src={house}
        alt="House"
        width={15}
        height={16}
        />
        <p className="ml-6 font-Manrope not-italic font-extrabold text-15 leading-20 text-center text-[#F7F7F7]">Lorem ipsum</p>
        </div>
      </button>
    </div>

    <div className="flex flex-wrap justify-center mt-73">
      <div className="rounded-5 m-20 sm:w-40p max-msm:w-85p text-left bg-woodsmoke bg-opacity-50 h-min">
        <div className='my-20'>
            <button className="w-full h-49 m-10 rounded-4 bg-woodsmoke bg-opacity-0 inline-flex justify-center px-4 py-2 flex justify-between items-center">
              <div className='flex'>
                <div className="ml-10">
                  <Image
                  src={fourCircles}
                  alt="Four circles"
                  width={15}
                  height={16}
                  />   
                </div>
                <p className="font-Manrope ml-9 not-italic font-extrabold text-16 leading-22 text-white hover:text-redpink ">Lorem ipsum</p>  
              </div>
              <svg className="h-20 w-20 mr-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF" aria-hidden="true">
                <path fillrule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" cliprule="evenodd" />
              </svg>
            </button>
            <div className="w-full px-20 mt-10">
              <p className="w-full font-Manrope font-normal text-14 leading-19 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-30 mt-40'>
              <div className="flex flex-row">
                <button>
                  <Image
                  src={externalLink}
                  alt="External link"
                  width={21.86}
                  height={21.86}
                  />
                </button>
                <Link href="/">
                <a className="ml-[15.5px] font-Manrope not-italic font-normal text-14 leading-19 text-redpink hover:text-white">Lorem ipsum.com</a>
                </Link>
              </div>

              <div className="flex flex-row">
                <button>
                <Image
                src={discord}
                alt="Disocrd"
                width={23.4}
                height={17.18}
                />
                </button>
                <Link href="/">
                <a className="ml-[15.6px] font-Manrope not-italic font-normal text-14 leading-19 text-redpink hover:text-white">@Lorem ipsum</a>
                </Link>
              </div>
              <div></div>
              <div className="flex flex-row">
                <button>
                <Image
                src={instagram}
                alt="Instagram"
                width={20}
                height={20}
                />
                </button>
                <Link href="/">
                <a className="ml-17 font-Manrope not-italic font-normal text-14 leading-19 text-redpink hover:text-white">@Lorem ipsum</a>
                </Link>
              </div>

              <div className="flex flex-row">
                <button>
                  <Image
                  src={twitter}
                  alt="Twitter"
                  width={20}
                  height={17}
                  />
                </button>
                <Link href="/">
                <a className="ml-17 font-Manrope not-italic font-normal text-14 leading-19 text-white hover:text-redpink">@Lorem ipsum</a>
                </Link>
              </div>
              <div></div>
            </div>
        </div>   
      </div>

      <div className="m-20 max-msm:w-85p sm:w-40p max-msm:w-85p max-sm:w-40p flex flex-col">        
        <div className="text-left rounded-5 bg-woodsmoke bg-opacity-50">     
          <div className='mt-20'>
            <button className="w-full h-49 rounded-4 bg-woodsmoke bg-opacity-0 inline-flex justify-center px-4 py-2 flex justify-between items-center">
            <div className='flex'>
              <div className="ml-18">
                <Image
                src={fourCircles}
                alt="Four circles"
                width={15}
                height={16}
                />
              </div>
              <p className="font-Manrope ml-9 not-italic font-extrabold text-16 leading-22 text-white hover:text-redpink">Lorem ipsum</p>
              <div className="ml-6">
                <Image
                src={questionMark}
                alt="Question Mark"
                width={15}
                height={16}
                />
              </div>
            </div>        
            <svg className="h-20 w-20 mr-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF" aria-hidden="true">
                <path fillrule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" cliprule="evenodd" />
              </svg>
            </button>
          </div>
          <div className='flex grid grid-cols-2 sm:grid-cols-3 m-20 h-320 overflow-auto'>
            <button className="flex items-center  m-5 h-100 mt-0 mr-0 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Accesories & Ears</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">9%</p>
            </div>
            </button>  

            <button className="flex items-center m-5 h-100 mt-0 mr-0 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Arms</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">15%</p>
            </div>
            </button>  

            <button className="flex items-center  m-5 h-100 mt-0 mr-0 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Background</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">2%</p>
            </div>
            </button>  

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Eye</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">32%</p>
            </div>
            </button>  

            <button className="flex items-center  m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Glasses</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">3%</p>
            </div>
            </button>  

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink item-center">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Hair & Hats</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">2%</p>
            </div>
            </button> 

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Head</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">92%</p>
            </div>
            </button>  

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Legs & Clothes</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">2%</p>
            </div>
            </button>  

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Mouth</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">46%</p>
            </div>
            </button>
            
            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Mouth</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">46%</p>
            </div>
            </button>

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Mouth</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">46%</p>
            </div>
            </button>

            <button className="flex items-center m-5 h-100 mt-0 mr-0 mt-5 rounded-4 bg-woodsmoke inline-flex border-2 border-transparent hover:border-redpink">
            <div className="w-113 h-69 ml-26 bg-woodsmoke justify-center">
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">Mouth</p>
            <p className="font-Manrope not-italic font-extrabold text-16 leading-22 text-white text-center">Lorem ipsum</p>
            <p className="font-Manrope not-italic font-normal text-13 leading-23 text-oslogrey text-center">46%</p>
            </div>
            </button>
          </div>
        </div>
        <div className='text-left rounded-5 bg-woodsmoke bg-opacity-50 mt-20'>
          <button className="w-full rounded-4 bg-woodsmoke bg-opacity-0 inline-flex justify-center px-4 py-2 flex justify-between items-center">
            <div className='flex'>
              <div className="my-10 ml-18">
              <Image
              src={fourCircles}
              alt="Four circles"
              width={15}
              height={16}
              />
              </div>
              <p className="font-Manrope mt-10 ml-9 not-italic font-extrabold text-16 leading-22 text-white hover:text-redpink">Lorem ipsum</p>
            </div>
            <svg className="h-20 w-20 mr-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF" aria-hidden="true">
              <path fillrule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" cliprule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className='flex justify-center rounded-5 bg-headerColor mt-20 h-205 items-center'>
      <div className="ml-40">
        <Image
        src={footerLogo}
        alt="Main logo"
        width={195}
        height={23}
        />
      </div>
    </div>
  </div> 
  )
}
