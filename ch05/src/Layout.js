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
            <header style={{background:'#ececec', padding:20, fontSize:24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
                <ul style={{float:'right'}}>
                    <li><Link to='/articles'>게시판</Link></li>
                    <li><Link to='/login'>로그인</Link></li>
                    <li><Link to='/mypage'>마이페이지</Link></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout