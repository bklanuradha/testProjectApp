import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component{
    render(){
        return(
            <View style={style.View}>
                <Text style={style.bodyText}>Hello World!</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    View: {
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