import {
  Bodycontainer,
  RideType,
  UpcomingRide,
  PastRides,
  Line,
  Humburger,
  Filters,
  Rectangle,
  FilterBox,
  FilterText,
  Divider,
  StateBox,
  CityBox,
  State,
  City,
  Polygon,
  SelectState,
  SelectCity,
  OptionList

} from "./style/body"

import { Card } from "../../components"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useStateValue } from "../../context/RideContext"
export default function Body() {
  const [{ nearestRides, upcomingRides, pastRides }, dispatch] = useStateValue();
  const [allRides, setAllrides] = useState([]);
  const [Rides, SetRides] = useState([]);
  const [rideType, setRideType] = useState("Nearest")
  const [user, Setuser] = useState("");
  const [showFilter, SetShowFilter] = useState(false);
  const [showState, setStateDrop] = useState(false);
  const [showCity, setCityDrop] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectState, setState] = useState("State");
  const [selectCity, setCity] = useState("City");

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then((res) => {
      setAllrides(res.data);
      dispatch({ type: "SET_ALLRIDES", payload: res.data })
      dispatch({ type: "SET_NEARIDES" })
      dispatch({ type: "SET_UPCOMINGRIDES" })
      dispatch({ type: "SET_PASTRIDES" })
    })
  }, [dispatch])

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/user").then((res) => {
      Setuser(res.data);
      dispatch({ type: "SET_USER", payload: res.data })
    })
  }, [dispatch])

  useEffect(() => {
    let cities = ["City"]
    let states = ["State"]
    for (let index = 0; index < allRides.length; index++) {
      if(selectState ==="State"){
        if (!cities.includes(allRides[index].city)) {
          cities.push(allRides[index].city)
        }
      }else if(selectState === allRides[index].state){
      
        if (!cities.includes(allRides[index].city)) {
          cities.push(allRides[index].city)
        }
      }
     
      if (!states.includes(allRides[index].state)) {
        states.push(allRides[index].state)
      }
    }
    // console.log("kk")
    setStateList(() => states);
    setCityList(() => cities);


  }, [allRides,selectState])


  useEffect(() => {
    if (rideType === "Nearest") {
      SetRides(nearestRides)
    } else if (rideType === "Upcoming") {
      SetRides(upcomingRides)
    } else if (rideType === "Past") {
      SetRides(pastRides)
    }
  }, [rideType, nearestRides, upcomingRides, pastRides])

  useEffect(() => {
    let sortedStates = [];
    let sortedCities = [];
    if (rideType === "Nearest") {
      sortedStates = nearestRides.filter((f) => {
        return f.state === selectState;
      }); 
        sortedCities = nearestRides.filter((f) => {
          return f.city === selectCity;
        })
      
    } else if (rideType === "Upcoming") {
      sortedStates = upcomingRides.filter((f) => {
        return f.state === selectState;
      })
      sortedCities = upcomingRides.filter((f) => {
        return f.city === selectCity;
      })
    } else if (rideType === "Past") {
      sortedStates = pastRides.filter((f) => {
        return f.state === selectState;
      })
      sortedCities = pastRides.filter((f) => {
        return f.city === selectCity;
      })
    }
    selectState!=="State" && SetRides(() => sortedStates) 
    selectCity!=="City" &&  SetRides(() => sortedCities) 

    if(selectState ==="State" && selectCity ==="City"){
      if(rideType ==="Nearest"){
        SetRides(() => nearestRides)
      }else if (rideType ==="Upcoming" ){
        SetRides(() => upcomingRides) 
      }else{
        SetRides(() => pastRides) 
      }
    }

  }, [selectCity, selectState,nearestRides,pastRides,rideType,upcomingRides])

  return (

    <Bodycontainer>
      <RideType onClick={() => setRideType("Nearest")} rideType={rideType}>Nearest rides</RideType>
      <UpcomingRide onClick={() => setRideType("Upcoming")} rideType={rideType}>Upcoming rides ({upcomingRides.length})</UpcomingRide>
      <PastRides onClick={() => setRideType("Past")} rideType={rideType}>Past rides ({pastRides.length})</PastRides>
      <Humburger src="/Vector.png" onClick={() => SetShowFilter(!showFilter)} />
      <Filters onClick={() => SetShowFilter(!showFilter)}>
        Filters
      </Filters>
      <FilterBox showFilter={showFilter}>
        <FilterText>Filters</FilterText>
        <StateBox >
          <State onClick={function () {
            setCityDrop(false)
            setStateDrop(!showState)
          }
          } >
            {selectState}
            <Polygon src="/Polygon 30.png" />
          </State>
          <SelectState showState={showState}>

            {
              stateList.map((s) => {
                return <OptionList onClick={function () {
                  setState(s);
                  setStateDrop(false);
                }} key={s}> {s} </OptionList>
              })
            }


          </SelectState>
        </StateBox>
        <CityBox>
          <City onClick={function () {
            setCityDrop(!showCity)
            setStateDrop(false)
          }
          } >
            {selectCity}
            <Polygon src="/Polygon 30.png" />
          </City>
          <SelectCity showCity={showCity}>
            {
              cityList.map((c) => {
                return <OptionList onClick={function () {
                  setCity(c);
                  setCityDrop(false);
                }} key={c}> {c} </OptionList>
              })
            }
          </SelectCity>
        </CityBox>
        <Divider src="/line.png" />
      </FilterBox>
      <Line rideType={rideType} />
      <Rectangle >
        {
          Rides.map((r) => {
            return <Card key={r.id + r.date} data={r} user={user} />
          })
        }

      </Rectangle>
    </Bodycontainer>
  )
}
