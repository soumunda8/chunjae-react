import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <hr />
            <ul>
                <li>
                    <Link to="/about">Intro</Link>
                </li>
                <li>
                    <Link to="/profile/hyeonwoo">monstaX 1</Link>
                </li>
                <li>
                    <Link to="/profile/minhuck">monstaX 2</Link>
                </li>
                <li>
                    <Link to="/profile/kihyeon">monstaX 3</Link>
                </li>
                <li>
                    <Link to="/profile/hyeongwon">monstaX 4</Link>
                </li>
                <li>
                    <Link to="/profile/honey">monstaX 5</Link>
                </li>
                <li>
                    <Link to="/profile/im">monstaX 6</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home