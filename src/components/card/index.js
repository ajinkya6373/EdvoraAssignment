import {
    Container,
    Image,
    Text,
    InfoContainer,
    State,
    City,
    SmallText
} from "./style/card"

export default function Card({data,user}) {

   
    return (
        <>
            <Container>
                <Image src={data.map_url}/>
                <InfoContainer>
                    <Text >
                        Ride id : {data.id}
                    </Text>
                    <Text >
                        Origin Station : {data.origin_station_code}
                    </Text>
                    <Text >
                        station_path: [{String(data.station_path)}]
                    </Text>
                    <Text >
                        Date: {data.date}
                    </Text>
                    <Text >
                        Distance: {data.distance}
                    </Text>
                </InfoContainer>
              
                    <State>
                        <SmallText>
                           {data.state}
                        </SmallText>
                    </State>
                    <City>
                        <SmallText>
                            {data.city}
                        </SmallText>
                    </City>
          
            </Container>
        </>
    )
}
