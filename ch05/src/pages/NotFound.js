const NotFound = () => {
    const style = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:64,
        position:'absolute',
        width:'100%',
        height:'100%',
    }
    return (
        <div style={style}>
        404 - 요청하신 페이지를 찾을 수 없습니다.
        </div>
    )
}

export default NotFound;