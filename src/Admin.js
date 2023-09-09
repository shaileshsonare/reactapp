import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            all under admin will appear here
            <Link to={"/contacts"}>Contact Us</Link >
            <Outlet />
        </div>
    )
}
