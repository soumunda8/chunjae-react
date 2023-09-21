import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'
import './Common.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const Test04 = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
            </div>
            <Contents />
            <Footer />
        </>
    )
}

export default Test04