import {
  TopbarContainer,
  Logo,
  Username,
  Avatar,
} from "./style/topbar"
import { useStateValue } from "../../context/RideContext"
export default function Topbar() {
  const [{user}] = useStateValue();
  return (
    <TopbarContainer >
      <Logo>
        Edvora
      </Logo>
      <Username>
        {user?.name}
      </Username>
      <Avatar src={user?.url}/>
      {/* </Avatar> */}
    </TopbarContainer>
  )
}
