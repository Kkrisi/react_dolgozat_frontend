import React from 'react'
import { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import SzakdogaAdmin from '../components/admin/SzakdogaAdmin';
import UjSzakdoga from '../components/admin/UjSzakdoga';


export default function Admin(){

    const {apiData} = useContext(ApiContext);

    return(
        <main className="row g-5">


            <article className="col-lg-8">
                {apiData ? <SzakdogaAdmin szakdogak={apiData}/> : "Nincs adat."}
            </article>


            <section className="col-lg-9">
                <UjSzakdoga/>
            </section>

        </main>
    );
}