const Test03 = () => {
    const season = ["봄", "여름", "가을", "겨울"];
    const results = [];
    return (
        <div className="App">
            <ul>
            {
                /*
                season.forEach(element => {
                    results.push(
                        <li>{element}</li>
                      );
                })
                */

                season.map((data, index) => (
                    <li key={index}>
                        {data}
                    </li>
                ))
            }
                {results}
            </ul>
        </div>
    )
}

export default Test03;