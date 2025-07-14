import { useState , useMemo} from "react";

export function Assignment3(){

    const [items, setItems] = useState([
        {name : "chocolate", value : 20},
        {name : "chips" , value : 10},
        {name : 'bhel', value : 30},
        {name : "fruits" , value : 100}
    ])

    const totalAmount = useMemo(() => {
        let total =0
        for(let i = 0 ; i <  items.length; i++){
            total += items[i].value
        }
        return total
    }, [items])

    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item.name} : Value = {item.value}</li>
                })}
            </ul>
            <p>Total amout billed is {totalAmount}</p>
        </div>
    )
}