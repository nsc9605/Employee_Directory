import React from 'react';

function SearchForm(props) {
    return (
        <div className="search-form">
            <form>
                <input 
                value={props.value}
                name="search"
                type="text"
                className="search-input"
                placeholder="Enter an employee to search"
                aria-label="Search"
                onChange={props.changeHandler}
                />
            </form>
        </div>
    )
}

export default SearchForm;