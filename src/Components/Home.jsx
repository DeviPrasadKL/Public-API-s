import React from 'react';
import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function Home() {

    let [pending, setpending] = useState(true);
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found")
                }
                return res.json();
            })
            .then((apiData) => { setdata(apiData.entries); setpending(false) })
            .catch((err) => { setError(err.message) })
    },[pending])

    
    return (
        <>
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"><Loader/> </div>}
            {data && <p id="para">Total API's are -- {data.length}</p>}
            {data && <div className="Home">
                {
                    data.map((value, index) => {
                        return (
                            <div className="card">
                                <h2>Name:- </h2><label>{data[index].API}</label>
                                <h2>Description:- </h2><label >{data[index].Description}</label>
                                <h2>Authentication:- </h2><label>{data[index].Auth}</label>
                                <h2>Cors:- </h2><label>{data[index].Cors}</label>
                                <h2>Link:- </h2><label><a href={data[index].Link} target="blank" >{data[index].Link}</a></label>
                                <h2>Category:- </h2><label>{data[index].Category}</label>
                            </div>

                        )
                    })
                }
            </div>}
        </>
    );
}
