import styled from "styled-components/macro";

export const Container = styled.div`
    position: relative;
    width: 1280px;
    height: 198px;
    margin-bottom: 13px;
    background: #171717;
    border-radius: 10px;

`

export const Image = styled.img`

width: 296px;
height: 148px;
margin: 22px 29px;
border-radius: 5px;
`

export const Text = styled.span`
margin-bottom: 7px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #CFCFCF;

`

export const InfoContainer = styled.div`
position: absolute;
left: calc(50% - 353px/2 - 94.5px);
top: 25px;
display: flex;
flex-direction: column;
`

export const State =styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px 10px;

position: absolute;
width: 80px;
height: 23px;
left: 1068px;
top:  26px;

background: rgba(0, 0, 0, 0.56);
border-radius: 16px;
`
export const City = styled(State)`
right: 20px;
left:1172px;

`
export const SmallText = styled.div`
position: static;
width: 60px;
height: 15px;
left: 10px;
top: 4px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;



color: #FFFFFF;



flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
