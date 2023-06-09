import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    const Myimg = "https://www.mooc.org/hubfs/applications-of-computer-programming.jpg";
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                    <div classname="col">
                        <img className="img-fluid" src={Myimg} alt="image" />
                        <Link type='button' to='/Blog' className="btn btn-primary mt-3">Know more about Programming</Link>
                    </div>

                    <div classname="col">
                        <>
                            <h2>Programming</h2>
                            <p>Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).[1][2] The source code of a program is written in one or more languages that are intelligible to programmers, rather than machine code, which is directly executed by the central processing unit. The purpose of programming is to find a sequence of instructions that will automate the performance of a task (which can be as complex as an operating system) on a computer, often for solving a given problem. Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.
                            </p>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;