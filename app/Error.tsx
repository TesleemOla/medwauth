"use client"

type ErrorTypes={
    error: any,
    reset: any
}
const ErrorPage=({error, reset}: ErrorTypes)=>{
    return (
        <>
            <p>Something went wrong!</p>
            <button onClick={()=> reset()}>Go to Home</button>
         </>
    )
}

export default ErrorPage