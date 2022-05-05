

const RideReducer = (state, action) => {
    let allrides = state.allRides;
    let nearestrides = state.nearestRides;
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "SET_ALLRIDES":
            return {
                ...state,
                allRides: action.payload,
            }
        case "SET_NEARIDES":

            const closest = (arr, target) => {
                if (!(arr) || arr.length === 0)
                    return null;
                if (arr.length === 1)
                    return arr[0];
                for (var i = 1; i < arr.length; i++) {
                    if (arr[i] > target) {
                        var p = arr[i - 1];
                        var c = arr[i]
                        return Math.abs(p - target) < Math.abs(c - target) ? p : c;
                    }
                }
                return arr[arr.length - 1];
            }
            let data = [];
            // let allRides = state.allRides;
            let user = state.user;
            const find = (allrides, station_code) => {
                for (let index = 0; index < allrides.length; index++) {
                    let Nearestno = closest(allrides[index].station_path, station_code)
                    data.push({distance:Math.abs(Nearestno-state.user?.station_code), ...allrides[index] })
                }
            }

            find(allrides, user?.station_code);
            data.sort((a, b) => {
                return a.distance - b.distance;
            });
            return {
                ...state,
                nearestRides: data,
            }
          
        case "SET_UPCOMINGRIDES":
        let upcomingRides =[];
        
        const isFutureDate=(idate)=>{
            var today = new Date().getTime();
                idate = idate.split("/");
                const year = idate[2].split(" ");
                let hours = year[1].split(":")[0];
                let min = year[1].split(":")[1];
                if(year[2]==="PM"){
                  hours =parseInt(hours)+12;
                }
            idate = new Date(year[0],idate[0]-1,idate[1],hours,min).getTime();
            return (today - idate) < 0 ? true : false;
            }

        for (let index = 0; index < nearestrides.length; index++) {
            if(isFutureDate(nearestrides[index].date)){
                upcomingRides.push(nearestrides[index]);
            }
            
        }
            return {
                ...state,
                upcomingRides: upcomingRides,
            }
        case "SET_PASTRIDES":

            let pastRides =[];
            const isPAstDate=(idate)=>{
                var today = new Date().getTime();
                    idate = idate.split("/");
                    const year = idate[2].split(" ");
                    let hours = year[1].split(":")[0];
                    let min = year[1].split(":")[1];
                    if(year[2]==="PM"){
                      hours =parseInt(hours)+12;
                    }
                idate = new Date(year[0],idate[0]-1,idate[1],hours,min).getTime();
                return ( idate-today) < 0 ? true : false;
                }
                for (let index = 0; index < nearestrides.length; index++) {
                    if(isPAstDate(nearestrides[index].date)){
                        pastRides.push(nearestrides[index]);
                    }
                    
                }
  
            return {
                ...state,
                pastRides: pastRides,
            }
        default:
            break;
    }
}
export default RideReducer;