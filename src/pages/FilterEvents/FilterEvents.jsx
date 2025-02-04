import { useCallback, useEffect, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SerachEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation"
import './FilterEvents.css';
const FilterEvents = ()=>{
   const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null
   })
  useEffect(()=>{console.log(monthYear);
  },[monthYear])
   const getMonthYear = useCallback((selectedMonth,selectedYear)=>{
      setMonthYear({selectedYear:selectedYear,selectedMonth:selectedMonth})
   },[])
   
    return(
      <div>
         <Navigation />
         <div className="find-events-wrapper">
          <FilterBox getMonthYear={getMonthYear}/>
          <SearchEventList monthYear={monthYear}/>
        </div>
      </div>
    )
  }
  export default FilterEvents;