//NavLink : 조건 연결 및 사이트 이동
//Outlet : Route로 감싸서 설정하면, 공통 페이지가 되고, 서브 컴포넌트에서는 교체될 대상을 설정하는 훅(hook)
import { NavLink, Outlet } from 'react-router-dom'

const Articles = () => {
    return (
        <div className='text-center'>
            <h1>글목록</h1>
            <ol class="list-group list-group-numbered">
                <li class="list-group-item"><ArticleItem id={1} /></li>
                <li class="list-group-item"><ArticleItem id={2} /></li>
                <li class="list-group-item"><ArticleItem id={3} /></li>
            </ol>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color:'deeppink',
        fontSize:32,
    };
    return (
        <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 {id} 번째 </NavLink>
    )
};

export default Articles