import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Question from "./Question";
function Quiz(){
    const [questions,setquestions] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/quiz/questions")
        .then(res=>res.json())
        .then(data=>{
            setquestions(data)
        })
    },[])
    return (
        <div>
            <h1>Quiz...</h1>
            {
                questions.map((question)=>{
                    return <Question question={question}></Question>
                })
            }
        </div>
    )
}

export default Quiz