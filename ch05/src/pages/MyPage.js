import { Navigate } from 'react-router-dom'

const MyPage = (isLoggedIn) => {
    // const isLoggedIn = false;
    if(!isLoggedIn) {
        return <Navigate to='/login' replace={true} />
    }
    return (
        <div>
            <h2>마이페이지</h2>
        </div>
    )
}

export default MyPage