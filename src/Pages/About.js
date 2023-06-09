import React from "react";
import Data from "../Data.json";
function About() {
    
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                    {Data.map((result)=>{
                        return(
                            <>
                            <div className="col">
                        <img className="img-fluid about-img" src={result.img} alt={result.name} />
                    </div>

                    <div className="col">

                        <h2>{result.title}</h2>
                        <p className="Author">{result.Author}</p>

                    </div>
                            </>
                        );
                    })}
                    
                </div>
            </div>
        </>
    );
}
export default About;