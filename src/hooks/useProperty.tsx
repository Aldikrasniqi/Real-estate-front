import axios from "axios";
import React, {useState, useEffect} from "react";

export default function useProperty() {
    const [listings, setListings] = useState([]);

    useEffect(()=> {
        axios.get("https://house-lydiahallie.vercel.app/api/listings")
        .then((res)=> {
            setListings(res.data);
        })
    }, [])

    return listings;
}