import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Home({navigation}) {

    const  pressHandler = () => {
        navigation.navigate('Review');
        //navigation.push('Review');
    };

    

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Reviews Tab' onPress={pressHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})