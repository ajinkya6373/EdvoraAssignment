import styled from "styled-components/macro"

export const TopbarContainer = styled.div`
position: absolute;
width: 1366px;
height: 84px;
left: 0px;
top: 0px;
background: #101010;
`
export const Logo = styled.span`
    
position: absolute;
width: 114px;
height: 43px;
left: 43px;
top: 21px;

font-family: 'SF Pro Display';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 43px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export const Username = styled.div`
position: absolute;
margin-right: 25px;
left: 1111px;
top: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
`
export const Avatar = styled.img`
position: absolute;
width: 44px;
height: 44px;
left: 1279px;
top: 20.28px;

// background: url("https://res.cloudinary.com/dt43t4ytm/image/upload/v1647517133/socialApp/profiles/trytd5s5jsquprq8ajip.jpg");
border-radius: 22px;
transform: rotate(-0.36deg);
object-fit: cover;
`