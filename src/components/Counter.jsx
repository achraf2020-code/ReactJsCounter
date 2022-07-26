import {useState} from "react"

const Counter = ()=>{
    const [num,setNum] = useState(0)
    const handlePlus = ()=>{
        setNum(prevNum => prevNum >= 100 ? 100 : prevNum+1)
        console.log(num)
    }
const handleMinus= ()=>{
    setNum(prevNum=>prevNum <= 0 ? 0 : prevNum-1)
    console.log(num)
}
    return(
    <div className="counter">

       <div className="counter--content">
            <div className="btn--plus" onClick={handlePlus}>+</div>
                <div className="counter--value">{num}</div>
            <div className="btn--minus" onClick={handleMinus}>-</div>
        </div>
    </div>
    )
}
export default Counter;