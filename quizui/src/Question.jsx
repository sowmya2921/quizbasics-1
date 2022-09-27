import React from "react";
function Question(props){
    return (
        <div>
            <h3>{props.question.question}</h3>
            {
                props.question.answers.map((ans)=>{
                    return <><input type="radio" name="ans"/>:{ans}</>
                })
            }
        </div>
    )
}
export default Question