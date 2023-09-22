// NavLink
// Outlet : Route로 감싸서 설정하면, 공통 페이지가 
import { NavLink, Outlet } from 'react-router-dom'

const Articles = () => {
  return (
    <div>
        <h1>글목록</h1>
        <ul>
            <ArticleItem id={1} />
            <ArticleItem id={2} />
            <ArticleItem id={3} />
        </ul>
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
        <li>
            <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 {id} 번째 </NavLink>
        </li>
    )
};

export default Articles