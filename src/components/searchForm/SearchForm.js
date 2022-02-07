export default function SearchForm({setCountry, getWeatherData, country}) {

    function inputOnChange(e)
    {
        setCountry(e.target.value)
    }

    function handleSearchForm(e) {
        e.preventDefault()
        getWeatherData()
    }

    const style = {
        input: {
            lineHeight: "1.8",
            fontSize: "96%",
            width: "100%",
            margin: "2px",
            flexGrow: "1"
        },
        button: {
            padding: "5px",
            fontSize: "97%",
            backgroundColor: "#d2c2fd",
            margin: "2px 5px",
        },
        formContainer: {
            width: "100%",
            display: "flex",
        }

    }

    return (
        <div>
            <form onSubmit={handleSearchForm} style={style.formContainer}>
                <div className="form-group" style={{flexBasis: "100%"}}>
                    <input style={style.input} onChange={inputOnChange} value={country} id="searchInput" type="text" placeholder="Type a location" className="form-control"/>
                </div>
                <button type="submit" style={style.button} className="btn">Search</button>
            </form>
        </div>
    )
}