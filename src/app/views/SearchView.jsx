import React from "react";

import SearchForm from "../components/search/SearchForm";
import SearchFilter from "../components/search/SearchFilter";
import SearchTravelList from "../components/search/SearchTravelList";




export default function SearchView() {
    return (
    <div>
        <SearchForm/>

        <div className="flex flex-row justify-evenly">
            <SearchFilter/> 
   
            <SearchTravelList/>    
        </div>
    </div>
    )
}