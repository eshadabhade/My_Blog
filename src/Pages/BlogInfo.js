import React from "react";
import Data from "../Data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BlogInfo() {
    let { id } = useParams();
    let blog = Data.find((data) => data.id == id);
    console.log(blog)
    return (
        <div className="container">
            <h2 className="blog-heading">{blog.name}</h2>
            <Link type='button' to='/Blog' className="btn btn-primary">Back To Blog</Link><hr />
            <div className="row rows-cols-1 rows-cols-md-2 g-4 py-5">
                <div className="col">
                    <img src={blog.img} className="img-fluid" alt="Programming languages" />
                </div>
                <div className="col">
                    <p>{blog.description}</p>
                </div>
            </div>
        </div>
    );
}
export default BlogInfo;