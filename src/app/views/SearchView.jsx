import React from "react";

import SearchForm from "../components/search/SearchForm";
import SearchFilter from "../components/search/SearchFilter";
import SearchOneTravel from "../components/search/SearchOneTravel";




export default function SearchView() {
    return (
    <div>
        <SearchForm/>

        <div className="flex flex-row justify-evenly">
            <SearchFilter/> 

            <SearchOneTravel/>  
        </div>
    </div>
    )
}