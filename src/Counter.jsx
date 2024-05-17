import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from "./redux/counterSlice";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counterReducer.count);
    const [fontSize, setFontSize] = useState(100); // Initial font size

    // Adjust font size based on window width
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            // Set font size based on window width
            setFontSize(windowWidth > 768 ? 100 : windowWidth / 7);
        };

        // Call handleResize on initial render and window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className=" m-5 p-5 text-center bg-light rounded">
                <h1 style={{ fontSize: `${fontSize}px` }}>{count}</h1>
                <div className="d-flex justify-content-evenly">
                    <button onClick={() => dispatch(incrementCounter())} className="btn btn-primary">Increment</button>
                    <button onClick={() => dispatch(decrementCounter())} className="btn btn-danger">Decrement</button>
                    <button onClick={() => dispatch(resetCounter())} className="btn btn-dark">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
