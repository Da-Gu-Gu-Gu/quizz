import type { NextPage, } from 'next'
import { useEffect,useState } from 'react'
import Finish from '../components/Finish';
import axios from 'axios'
import Seo from '../components/Seo';

interface IState{
    index:number,
    correctanswer:any[],
    question:String,
    answer:any[],
    myanswer:any[],
    finish:Boolean,
    loading:Boolean,
    all:[{
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
    }],
    incorrectanswer:any[],
    score:number,
}

const quizz = () => {


    const [state,setState]=useState<IState>({
        index:0,
        correctanswer:[],
        finish:false,
        loading:true,
        question:'',
        answer:[],
        incorrectanswer:[],
        myanswer:[],
        all:[{
            category: '',
            type: '',
            difficulty: '',
            question: '',
            correct_answer: '',
            incorrect_answers:[]
        }],
        score:0

    })


    let {all,index,loading,finish,correctanswer,question,answer,score,myanswer}=state

    useEffect(()=>{
 
 
     const callApi=async()=>{
        let apiCategory= localStorage.getItem("category")
        if(!apiCategory){
            apiCategory="9"
        }
     let response=await axios.get(`https://opentdb.com/api.php?amount=10&category=${Number(apiCategory)}&type=multiple`)
     let data=await response.data
     console.log(data)
     setState({
                ...state,
                all:data.results,
                loading:false
    })
}
callApi()
 
    },[])

    useEffect(()=>{
       
        
        if(index<10 && all.length>1){
        setState({
            ...state,
            question:all[index].question,
            correctanswer:[...correctanswer,all[index].correct_answer],
            answer:[...all[index].incorrect_answers,all[index].correct_answer].sort((a,b)=>0.5-Math.random()),
        })
    }
  
    },[index,all])

    useEffect(()=>{
        let aa=myanswer.map((x,i)=>correctanswer.includes(x)?myanswer[i]:false)
        setState({
            ...state,
            score:aa.filter(x=>x).length
        })
    },[finish])
   
    const next=(ans:String | Boolean | Number)=>{
        if(index<9){
        setState({
            ...state,
            myanswer:[...myanswer,ans],
            index:index+1
        })
    }else{
        setState({
            ...state,
            myanswer:[...myanswer,ans],
            finish:true
        })
    }
    }
  return (
    <>
    <Seo />

    <div className='bg-violet-800 min-h-screen h-full m-0 p-5  w-screen'>
       {loading?
       (
        <p className='text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading ...</p>
       )
       :
        !finish?
            (
         <div className="lg:w-1/2 h-full text-xl mt-5 tracking-widest text-yellow-500 md:w-3/4 w-[90%] mx-auto ">
            Question {index+1}/10
        <div className='bg-pink-500 w-full h-1 my-3 rounded-md'></div>
        <p className='text-white'>{question}</p>
        <div className='answer h-[300px] mt-5 p-5 gap-5 rounded-lg w-full bg-white flex flex-col '>
            {answer.map((x,i)=>
            <div key={i.toString()} onClick={()=>next(x)} className='h-1/4 bg-gray-400  cursor-pointer rounded-md justify-center flex items-center'>
                <p className='text-white md:text-xl text-sm'>{x}</p>
            </div>
            )}
        </div>
        </div>
        )
        :(
            <Finish score={score} myanswer={myanswer} correctanswer={correctanswer}/>      
        )
       }
    </div>
    </>
  )
}

export default quizz