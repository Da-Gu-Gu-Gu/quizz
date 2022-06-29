import type { NextPage } from 'next'
import Head from 'next/head'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {ImMusic} from 'react-icons/im'
import {TbMathSymbols} from 'react-icons/tb'
import {IoGameControllerOutline} from 'react-icons/io5'
import {MdSportsSoccer} from 'react-icons/md'
import {BsGeoAlt} from 'react-icons/bs'
import Link from 'next/link'
import Seo from './components/Seo'


const Home: NextPage = () => {
  return (
    <div >
  
    <Seo />
      <main> 
        <div className='bg-violet-800 h-screen m-0 p-5  w-screen'>
          <h2 className='text-center text-3xl text-white font-bold py-5 tracking-widest'>Guu Quizz</h2>
            <div className='lg:w-1/2 md:w-3/4 w-[90%] mx-auto rounded-lg bg-white h-[85%] gap-5  p-5 flex flex-wrap'>
              <Link href="/quizz" >
                <a className='md:w-[47%] w-[45%] text-white rounded-lg flex items-center justify-center h-[30%] flex-col bg-red-400'>
                  <div onClick={()=>localStorage.setItem("category","9")} >
                  <div  className='p-2 mb-2 text-2xl text-white text-center w-max rounded-md bg-gray-300 bg-opacity-50 mx-auto'>
                    <HiOutlineLightBulb />
                  </div>
                  General 
                  </div>
                </a>
                </Link>
                <Link href="/quizz" >
                <a className='md:w-[47%] w-[45%] text-white rounded-lg flex items-center justify-center h-[30%] flex-col  bg-cyan-400'>
                  <div onClick={()=>localStorage.setItem("category","12")} >
                <div  className='p-2 mb-2 text-2xl text-white rounded-md bg-gray-300 bg-opacity-50'>
                    <ImMusic />
                  </div>
                  Music
                  </div>
                </a>
                </Link>
                <Link href="/quizz">
                <a  className='md:w-[47%] w-[45%] text-white rounded-lg flex items-center justify-center h-[30%] flex-col  bg-green-400'>
                <div onClick={()=>localStorage.setItem("category","19")}>
                <div  className='p-2 mb-2 text-2xl text-white rounded-md bg-gray-300 bg-opacity-50'>
                    <TbMathSymbols />
                  </div>
                  Math
                  </div>
                </a>
                </Link>
                <Link href="/quizz">
                  <a className='md:w-[47%] w-[45%] text-white rounded-lg flex items-center justify-center h-[30%] flex-col  bg-yellow-400'>
                <div  onClick={()=>localStorage.setItem("category","21")} >
                <div className='p-2 mb-2 text-2xl text-white rounded-md bg-gray-300 bg-opacity-50'>
                    <MdSportsSoccer />
                  </div>
                  Sport
                  </div>
                </a>
                </Link>
                <Link href="/quizz">
                  <a className='md:w-[47%] w-[45%] text-white rounded-lg flex items-center justify-center h-[30%] flex-col  bg-orange-400'>
                <div  onClick={()=>localStorage.setItem("category","15")} >
                <div  className='p-2 mb-2 text-2xl text-white rounded-md bg-gray-300 bg-opacity-50'>
                    <IoGameControllerOutline />
                  </div>
                Game
                </div>
                </a>
                </Link>
                <Link href="/quizz">
                  <a className='md:w-[47%] w-[45%] text-white rounded-lg flex items-center justify-center h-[30%] flex-col  bg-pink-400'>
                <div onClick={()=>localStorage.setItem("category","22")} >
                <div  className='p-2 mb-2 text-2xl text-white rounded-md bg-gray-300 bg-opacity-50 w-max mx-auto'>
                    <BsGeoAlt />
                  </div>
                  GeoGraphy
                  </div>
                </a>
                </Link>
            </div>
          </div> 
      </main>

  
    </div>
  )
}

export default Home
