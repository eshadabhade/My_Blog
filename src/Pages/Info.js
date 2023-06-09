import React from "react";
import { Link } from "react-router-dom";

function Info(props){
    
    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                {props.input.map((result) => {
                    return (
                        <div className="col" key={result.id}>
                            <div class="card">
                                <img src={result.img} class="card-img-top" alt="C" />
                                <div class="card-body">
                                    <h5 class="card-title">{result.title}</h5>
                                    <Link type='button' to={`/Blog/${result.id}`} class="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
         
        </>
    );
}

export default Info;