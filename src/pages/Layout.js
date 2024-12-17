import React from 'react'
import { Link, Outlet } from 'react-router';


export default function Layout(){
    return(
        <>
            <nav className="navbar navbar-expands-sm navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Admin oldal
                    </Link>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}