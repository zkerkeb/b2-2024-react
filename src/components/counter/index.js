import { useEffect, useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log("🚀 ~ Counter ~ count:", count)
        document.title = `Counter ${count}`
    }, [count])


    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={increment}>+</button>

        </div>
        
    );
}

export default Counter;
