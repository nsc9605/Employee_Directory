import React from 'react';
import "./SearchForm.css";

function SearchForm(props) {
    return (
        <div className="search-form">
            <form>
                <input 
                value={props.value}
                // id={search}
                name="search"
                type="text"
                className="search-input"
                placeholder="Enter an employee to search"
                aria-label="Search"
                onChange={props.changeHandler}
                />
                {/* <button 
                className="searchBtn"
                // key={}
                onClick={props.changeHandler}
                type="search">Search</button> */}


            </form>
        </div>
    )
}

export default SearchForm;