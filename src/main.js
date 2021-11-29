import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Home = ({navigation}) => {
    return(
        <View style={styles.view}>
            <Text style={styles.bodyText}>Welcome to Home!</Text>
            <Button title="Go to Page 02" onPress={() => navigation.navigate('Page 02')} />
        </View>
    );
};

const Page02 = ({navigation})=> {
    return(
        <View style={styles.view}>
            <Text style={styles.bodyText}>Welcome to Page02!</Text>
            <Button title="Go to Home Screen!" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Previous Page!" onPress={() => navigation.goBack()} />
            <Button title="Go to First Page!" onPress={() => navigation.popToTop()} />
            <Button title="Load this Screen Again!" onPress={() => navigation.push('Page 02')} />
        </View>
    );
};

const Stack = createStackNavigator();

class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Page 02" component={Page02} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bodyText: {
        fontSize: 20,
    },
});

export default App;