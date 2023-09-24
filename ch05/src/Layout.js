import React from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);       // history.go(-1)과 동일
    };
    const goHome = () => {
        navigate('/', {replace:true});  // replace : true -> 현재창으로 뜨게
    };
    return (
        <div>
            <header>
                <nav className="py-2 bg-body-tertiary border-bottom">
                    <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><button className='nav-link px-2' onClick={goHome}>Home</button></li>
                        <li className="nav-item"><button className='nav-link px-2' onClick={goBack}>뒤로가기</button></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><Link className='nav-link px-2' to='/articles'>게시판</Link></li>
                        <li className="nav-item"><Link className='nav-link px-2' to='/login'>로그인</Link></li>
                        <li className="nav-item"><Link className='nav-link px-2' to='/mypage'>마이페이지</Link></li>
                    </ul>
                    </div>
                </nav>
            </header>
            <div className='container my-5'>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout