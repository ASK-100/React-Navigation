import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/reviewDetails';


const screens = {
    Home: {
        screen: Home
    },
    Review: {
        screen: Review
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);