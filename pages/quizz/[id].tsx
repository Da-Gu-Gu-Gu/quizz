import type { NextPage, } from 'next'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'



const quizz: NextPage = () => {
    const router=useRouter()
    const {id}=router.query

    const [index,setIndex]=useState<number>(0)
    const [correctanswer,setCorrectAnswer]=useState()
    const [question,setQuestion]=useState()
    const [all,setAll]=useState<All>([])
    const [answer,setAnswer]=useState()
    const [incorrectanswer,setIncorrectAnswer]=useState()
    // const [correctanswer,setCorrectAnswer]=useState()

    useEffect(()=>{
     if(!router.isReady) return
     fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
        .then(res=> res.json())
        .then(data=>{
            setAll(data.results)
        })

    },[router.isReady])

    useState(()=>{
        setQuestion(all[index]?.question)
        setIncorrectAnswer(all[index].incorrect_answer)
        setCorrectAnswer(all[index].correct_answer)
        setAnswer([...incorrectanswer,correctanswer].sort((a,b)=>0.5-Math.random()))
        setIndex(index+1)
    },[index])
   

  return (
    <div className='bg-violet-800 h-screen m-0 p-5  w-screen'>
        <div className="lg:w-1/2 h-full text-xl mt-5 tracking-widest text-yellow-500 md:w-3/4 w-[90%] mx-auto ">
            Question 6/10
        <div className='bg-pink-500 w-full h-1 my-3 rounded-md'></div>
        <p className='text-white'>{question}</p>
        <div className='answer h-[60%] mt-5 p-5 gap-5 rounded-lg w-full bg-white flex flex-col '>
            <div className='h-1/4 bg-gray-400  cursor-pointer rounded-md justify-center flex items-center'>
                <p className='text-white'>One</p>
            </div>
            <div className='h-1/4 bg-gray-400 cursor-pointer rounded-md justify-center flex items-center'>
                <p className='text-white'>One</p>
            </div>
            <div className='h-1/4 bg-gray-400 cursor-pointer rounded-md justify-center flex items-center'>
                <p className='text-white'>One</p>
            </div>
            <div className='h-1/4 bg-gray-400 cursor-pointer rounded-md justify-center flex items-center'>
                <p className='text-white'>One</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default quizz