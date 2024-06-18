import { useState, useEffect } from 'react';
import './Home.css'
export const Home = (): JSX.Element => {

    const [count, setCount] = useState(0)
    
    
    let num: number = 0;

    useEffect(() => {
        // fruits.forEach(function(): number {
        //     return num++;
        // })

        // console.log("num", num)
        list()
    }, [])
    const fruits: string[] = ['mango', 'apple', 'kiwi']

     function list(){
        const arr = []
        for(let i = 0; i < fruits.length; i++){
            arr.push(<div key={crypto.randomUUID()}>{fruits[i]}</div>)
        }

        return arr
    }

    
    //for loops
    //map
      // use jenkins
      // use terraform
    //closure
    //recursive inner child
    //event loop
    
    return (
        <>
        <div className="container">

            {/* {list()} */}
            { 
                fruits.map(function(fruit, index){
                    return (
                        <div key={crypto.randomUUID()}>{fruit}</div>
                    )
                })
            }


            {/* <h1>Counter</h1> 

            <div className="counter">
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div> */}
        </div>
        </>
    )
}