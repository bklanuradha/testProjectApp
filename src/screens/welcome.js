import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Images from '../config/images';

class welcome extends Component {
    render(){
        return(
            <ImageBackground source={Images.background} style={styles.background} />
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default welcome;