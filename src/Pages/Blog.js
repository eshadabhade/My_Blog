import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";
import Info from './Info';

function Blog() {
    const [input, setInput] = useState(Data);
    console.log(input);
    return (
        <div className="container">
            <h1 className="header">Programming Languages</h1>
            <Info input={input} />
        </div>

    );
}
export default Blog;