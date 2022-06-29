import Link from "next/link"

interface IProps{
    score:number,
    myanswer:any[],
    correctanswer:any[]
}

const Finish:React.FC<IProps>= ({score,myanswer,correctanswer}) => {
  return (

    <>
    <div className=" bg-white p-5 rounded-lg w-[80%] mx-auto md:w-1/4">
       <p className="text-black font-semibold text-center ">Your Final Score</p>
       <div className="text-center mt-5 mb-3">
       <span className="text-center text-green-500 p-3 rounded-lg bg-black">{score}</span>
       </div>
       <Link href="/">
        <a  className="text-center flex items-center justify-center mt-8 bg-violet-600 rounded-lg text-white h-[40px]">
            Go Back
        </a>    
       </Link>
    </div>
    <div className=" bg-white p-5 rounded-lg w-[80%] mx-auto mt-5">
        <div className="w-full flex gap-3 justify-between">
            <span className="font-semibold w-8 ">No.</span>
            <p className="font-semibold text-left w-1/2">Your'Answer</p>
            <p  className="font-semibold text-left w-1/2">Correct Answer</p>
        </div>
        {myanswer.map((x,i)=>
        <div key={i.toString()} className="w-full flex justify-between mt-3 gap-3 ">
            <p className="w-8">{i+1}</p>
            <p className=" w-1/2 text-left ">{x}</p>
            <p  className=" w-1/2 text-left">{correctanswer[i]}</p>
        </div>

        )}
    </div>
    </>
  )
}

export default Finish 