import react, { useContext } from 'react'
import { counterContext } from '../contextAPI/context';



const Component = ({ count3 }) => {
    const vlaue1 = useContext(counterContext)
    return (
        <>
            <div> this is first way to useContext hooks {count3} </div>
            <div>this is second way to useContext hooks {vlaue1}</div>
        </>
    )
}

export default Component;