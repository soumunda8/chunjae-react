import {useParams} from 'react-router-dom';

const data = {
    hyeonwoo : {
        nm : '손현우',
        desciption : '예비군',
        imgSrc : 'https://i.namu.wiki/i/nZ1TlZYxWdX0kg2cTbY54XxT9brAgnOTLdXwxWTBydUGTQPCqyzhLV-9i0rJJOKkrgPTgCD6NwNB0DtVOZRTkY0sqe-GHctbUqoHhV1UhL4UPgGqkR7DgKi4aHbniuvW-D6LK2bmtUf5lNTNbdefgA.webp',
    },
    minhuck : {
        nm : '이민혁',
        desciption : '군인...',
        imgSrc : 'https://i.namu.wiki/i/caCKcoFfkIQzhiqkBN7vo8Gw2VGVf9OKxt2fH05Hf-zguhM8Ok1SJAfsUbvguAvb_NmnniU_8RtkUO4RdRfo5DNHoTV-MV_fQMOTSLebTB4rv6OaSzvta1y3DrRmAkrOaZ8FYoR_QSZBMSQEQKO6FA.webp',
    },
    kihyeon : {
        nm : '유기현',
        desciption : '군인',
        imgSrc : 'https://i.namu.wiki/i/jLA8YCTNkq8t9Z9xf8MNSRSojwy1MXA3rr8CHO3ABN8ZtMMdk-g8n69KYsLZZRw1RXcGnsUj3Qc6LiMCokQLrjffvX3g1o5Pn-5l07E-Rx2SvwA8QFJ0aqKCMISTRQbSry8ZgxrDjKR8M04kr0qrCg.webp',
    },
    hyeongwon : {
        nm : '채형원',
        desciption : '민간인',
        imgSrc : 'https://i.namu.wiki/i/flvf4-L0VLIpYkwqwcKvaZ3PN0TNOTVhEfteaW-xOgExggebWaYkIej8URwYO5bvVqfjsJEiEdvRqFb3ZoWrEZpKpqlpafULAX0jBYGAeWa0V-ZKMyizrc2o1wKmqS9Dfckk1BR1pJWSetiluuS2iw.webp',
    },
    honey : {
        nm : '이주헌',
        desciption : '군인',
        imgSrc : 'https://i.namu.wiki/i/9TQLux99JxCLfhi4PPw6fxUueQ4wKTOS9wfMakcipPovlEwqEHwK_YoYGzyfqPrBy1vQm69PsXR9cB9uWxGAJxb8i5oKbHxcu0lsi7i5mHYNLFVzJuJxYCI2Dya2ndhyc-5_XNbXjLXArXc4FULCHA.webp',
    },
    im : {
        nm : '임창균',
        desciption : '최애',
        imgSrc : 'https://i.namu.wiki/i/gRCPGOlDSyQj1utE4acEvixsSDadzGinFiheFXQdCt_JwRXX0Vc24RqvNJTXmJ9LbF4lB_crvsuvl-Ba3CWBAJf1u-hPdQDgbS0eJh6-xe8vCy6oqc7Pj6Xos2Ahd2G9F29n9K9IlkQa2ZjVZsLTzQ.webp',
    },
}
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return (
        <div>
            <h2>Profile</h2>
            <hr />
            {profile ? (
                <div>
                    <h3>{profile.nm}</h3>
                    <p>{profile.desciption}</p>
                    <img src={profile.imgSrc} alt={profile.nm} />
                </div>
            ) : (
                <p>해당 사람이 존재하지 않습니다.</p>
            )}
        </div>
    )
}

export default Profile