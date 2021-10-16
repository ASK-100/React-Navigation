import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Review({navigation}) {

    const pressHandler = () => {
        navigation.goBack();
        //navigation.navigate('Home');
    }

    return (
    <View style={styles.container}>
        <Text>ReviewDetails Screen</Text>
        <Button title='HomeScreen' onPress={pressHandler}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})