import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div>
                <Link to={`/`} >
                    <img src='/favicon/marvel_full.png' />
                </Link>
            </div>
        </>
    );
}

