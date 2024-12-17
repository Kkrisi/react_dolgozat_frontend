import React from 'react'
import { myAxios } from "./MyAxios";
import { useState, createContext, useEffect } from "react";



export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    const [kategoriaData, setKategoriaData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const getData = async(vegpont, fv) => {
        setLoading(true);
        setError(null);

        try{
            const response = await myAxios.get(vegpont);
            fv(response.data);
        } catch (err) {
            setError("Hiba az adatok lekérésekor.");
        } finally {
            setLoading(false);
        }
    };


    const postData = async(vegpont, data) => {
        setLoading(true);
        setError(null);

        try{
            const response = await myAxios.post(vegpont, data);
        } catch (err) {
            setError("Hiba az adatok lekérésekor.");
        } finally {
            setLoading(false);
        }
    };




    useEffect(() => {
        getData("/api/szakdogak", setApiData);
        getData("/api/szakdogak/kategoriak", setKategoriaData);
    }, []);

    return(
        <ApiContext.Provider value={{ apiData, getData, postData, kategoriaData}}>
            { children }
        </ApiContext.Provider>
    );

}

