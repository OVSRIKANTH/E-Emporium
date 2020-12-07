import * as Location from 'expo-location';
import {useEffect , useState, } from 'react';

export default useLocation = () => {


    try {
        const [location, setLocation] = useState();
        const getLocation = async () => {
            const { granted } = await Location.requestPermissionsAsync();
            if(!granted) return;
            try {             
                const { coords : {latitude, longitude }} = await Location.getLastKnownPositionAsync();
                setLocation({latitude,longitude});
            } catch (error) {
                
            }
           
        }
    
        useEffect(() => {getLocation();}, []);

        return location;
        
    } catch (error) {
        console.log("Location error");
    }

    
}