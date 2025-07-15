import { memo, useCallback } from "react"
import { useState } from "react"

export function Assignment1(){
    const [count, setCount] = useState(0)

    const handlerIncrement = useCallback(() => {
        setCount(count => count + 1)
    }, [count])

    const handlerDecrement = useCallback(() => {
        setCount(count => count - 1)
    }, [count])

    return (
        <div>
            <p>Counter = {count}</p>
            <CustomButton  onIncrement = {handlerIncrement}   onDecrement = {handlerDecrement} />
        </div>
    )
}

const CustomButton = memo(({onIncrement, onDecrement}) => {
    return <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
})


