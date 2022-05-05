import styled from "styled-components/macro"
export const Bodycontainer = styled.div``

export const RideType = styled.span`
position: absolute;
left: 43px;
top: 113px;
cursor:pointer;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: ${props => props.rideType === "Nearest" ? "#FFFFFF" : "#D0CBCB"} ;

`

export const UpcomingRide = styled(RideType)`
left: 205px;
top: 113px;
color:${props => props.rideType === "Upcoming" ? "#FFFFFF" : "#D0CBCB"} ;

`

export const PastRides = styled(UpcomingRide)`
left: 413px;
top: 113px;
color: ${props => props.rideType === "Past" ? "#FFFFFF" : "#D0CBCB"} ;
`

export const Line = styled.div`
position: absolute;
width: 118px;
height: 0px;
left: ${props => props.rideType === "Nearest" ? "43px" : props.rideType === "Upcoming" ? "207px" : "413px"};
top: 141px;
border: 2px solid #FFFFFF;
transition: 0.10s;
transition-timing-function: ease-in;
`
export const Humburger = styled.img`
position: absolute;
left:  1240px;
top: 117px;
bottom: 25%;
cursor: pointer;

`
export const Filters = styled.div`
position: absolute;
width: 48px;
height: 19px;
left: 1271px;
top: 113px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
cursor: pointer;
color: #F2F2F2;

`

export const Rectangle = styled.div`
position: absolute;
overflow-y: scroll;
height: 591px;
// width: 1280px;
// height: 198px;
left: calc(50% - 1280px/2);
top: calc(50% - 198px/2 - 120px);
// background: #171717;
// border-radius: 10px;

::-webkit-scrollbar {
    display: none;
  }

`

export const FilterBox = styled.div`
position: absolute;
width: 228px;
height: 190px;
background: #131313;
border-radius: 15px;
right: 43px;
top: 150px;
z-index: 999;
width: 228px;
display:${props => props.showFilter ? "block" : "none"};
`

export const FilterText = styled.span`
position: absolute;
width: 49px;
height: 24px;
top:23px;
left:42px;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
/* identical to box height */
color: #A5A5A5;
`
export const Divider = styled.img`

position: absolute;
width: 158px;
height: 0px;
top: 59px;
left: 35px;
border: 1px solid #CBCBCB;
`

export const StateBox = styled.div`
top: 79px;
left: 37px;
position: absolute;
width: 168.45px;
height: 37.5px;
background: #232323;
border-radius: 4.68775px;
`
export const CityBox = styled(StateBox)`
top: 129px;
`
export const State = styled.span`
position: absolute;
width: 144px;
height: 22px;
top: 8px;
left: 12px;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
`
export const City = styled(State)`

`
export const Polygon = styled.img`
position: absolute;
width: 12.19px;
height: 12.19px;
top: 4px;
left: 132px;

`
export const SelectState = styled.div`
position: absolute;
width:168px;

background-color: #232323;
  top: 39px;
  z-index: 1000;
  height: 100px;
  border-radius: 5px;
  display:${props=>props.showState ? "block":"none"};
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }

}

`
export const SelectCity = styled(SelectState)`
display:${props=>props.showCity ? "block":"none"};

`;

export const OptionList = styled.div`
    width: 100%;
    height: 25px;
    margin: 8px 19px 17px 14x;
    background: #131313;
    margin: 0px 0px 2px 0px;
    text-align: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
    border-radius: -4px;
    cursor:pointer;

`