export default function SearchForm({inputOnChange, handleSearchForm, country}) {

    const style = {
        input: {
            lineHeight: "1.8",
            fontSize: "96%"
        },
        button: {
          padding: "5px",
          fontSize: "97%"
        }
    }

    return (
        <div>
            <form onSubmit={handleSearchForm}>
                <input onChange={inputOnChange} value={country} id="searchInput" type="text" placeholder="Type a location" style={style.input}/>
                <button type="submit" style={style.button}>Search</button>
            </form>
        </div>
    )
}