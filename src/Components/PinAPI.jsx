import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PinAPI() {
    let { searchkey } = useParams();

    let [pending, setpending] = useState(true);
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("https://api.postalpincode.in/pincode/" + searchkey)
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found")
                }
                return res.json();
            })
            .then((apiData) => { setdata(apiData); setpending(false) })
            .catch((err) => { setError(err.message) })
    }, [pending,searchkey])


    return (
        <>
            {/* {!data && <h1>Data Not Found</h1>} */}
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"> </div>}
            {data && <div className="pinApi my-3">
                <h2 className="pinOut">Search Results:- for Pin code {searchkey}</h2>
                <p>{data[0].Message}</p>

                {
                    data[0].PostOffice.map((value, index) => {
                        return (
                            <div className="cardsApi">
                                <h2>Name:- </h2><label>{data[0].PostOffice[index].Name}</label>
                                <h2>District:- </h2><label>{data[0].PostOffice[index].District}</label>
                                <h2>Division:- </h2><label>{data[0].PostOffice[index].Division}</label>
                                <h2>Block:- </h2><label>{data[0].PostOffice[index].Block}</label>
                                <h2>Circle:- </h2><label>{data[0].PostOffice[index].Circle}</label>
                                <h2>Branch Type:- </h2><label>{data[0].PostOffice[index].BranchType}</label>
                                <h2>Delivery Status:- </h2><label>{data[0].PostOffice[index].DeliveryStatus}</label>

                                <h2>Pin Code:- </h2><label>{data[0].PostOffice[index].Pincode}</label>
                                <h2>Region:- </h2><label>{data[0].PostOffice[index].Region}</label>
                                <h2>State:- </h2><label>{data[0].PostOffice[index].State}</label>
                                <h2>Country:- </h2><label>{data[0].PostOffice[index].Country}</label>
                                <h2>Description:- </h2><label>{data[0].PostOffice[index].Description}</label>
                            </div>

                        )
                    })
                }
            </div>}

        </>
    );
}
