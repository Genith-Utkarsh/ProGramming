import { useMemo, useState } from "react";

export function Assignment1(){
    const [inputValue, setInputValue] = useState(1)

    // expensive operation
    const factorial = useMemo(() => {
        let fact = 1
        for(let i =1 ; i <= inputValue ; i++){
            fact *= i
        }
        return fact

    }, [inputValue])


    return (
        <div>
            <input 
                type="number"
                placeholder="Enter number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <p>The factorial of {inputValue} is {factorial}</p>
        </div>
    )
}