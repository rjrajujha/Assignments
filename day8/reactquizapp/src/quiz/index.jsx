import { useState } from "react";

const Quiz = () => {

    const [score, setScore] = useState(0);

    const question = [{
        q: "Waat is 2 +5",
        opt: [7, 8, 9, 10],
        copt: "7"
    },

    {
        q: "Waat is 2 +8",
        opt: [7, 8, 9, 10],
        copt: "10"
    }]





    return (
        <>

            {question.map(e => {
                return (
                    <div>
                        <p>{e.q}</p>
                        {
                            e.opt.map((e) => {
                                return (
                                    <p className="option" onClick={(e) => {console.log(e.target.innerText)}}>{e}</p>
                                )
                            })
                        }
                    </div>
                )
            })}

        </>
    )
}

export default Quiz;