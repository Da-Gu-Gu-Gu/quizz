import type { NextPage, } from 'next'
import { useEffect,useState,useRef } from 'react'

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

const quizz: NextPage = () => {

    const progressRef=useRef(null)
// console.log(progressRef?.current)
    // const progress=(timeleft:Number,timetotal:Number,progressRef.current)=>{
        
    // }

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
 
    let apiCategory=localStorage.getItem("category")
    if(!apiCategory){
        apiCategory="9"
    }
     const callApi=async()=>{
     let api=await fetch(`https://opentdb.com/api.php?amount=10&category=${apiCategory}&type=multiple`)
    let data=await api.json()
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
        <div ref={progressRef} className='bg-pink-500 w-full h-1 my-3 rounded-md'></div>
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
            <p>{score}</p>
        
        // correctanswer.map((x,i)=>
        //  <p className='' key={i.toString()}>{x}</p>
        // )
    //     correctanswer.map((x,i)=>
    //     <p className='' key={i.toString()}>{x}</p>
    //    )
        )
       }
    </div>
  )
}

export default quizz