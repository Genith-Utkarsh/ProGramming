import { useMemo, useState } from "react";

const tasks = ["issue with json", "payload return 400 bad request", "port 80 is working fine", "sni host uses port 443"]

export function Assignment2(){
    const [solution, setSolution] = useState(tasks)
    const [searchValue, setSearchValue] = useState("")


    const filteredResults =useMemo(() => {
        return  solution.filter(x => x.includes(searchValue))
    }, [searchValue, solution])
    return (
        <> 

            <input 
                type="text"  
                onChange={(e) => setSearchValue(e.target.value)}
             ></input>
            
            {filteredResults.map((content) => {
                return <Card content={content} />
            })}
        
        </>
    )
}

function Card({content}){
    const cardStyle = {
    backgroundColor: '#005792',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    margin: '16px',
    width: '300px',
    fontFamily: 'Arial, sans-serif',
  };

  
    return <div style={cardStyle}>
        <h1>{content}</h1>
    </div>
}


