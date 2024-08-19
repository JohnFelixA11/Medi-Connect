import {StyleSheet ,Text ,View, Image } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';

export default function Login(){
    return (
        <Screen style = {styles.container}>
            <Image style={styles.logo}
            source ={require('../assets/logo-hospital.png')}
           
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        alignItems: 'center',
        padding:10,
        justifyContent: 'center',
      },
      logo:{
        height:300,
        width:300,
        alignSelf:'center'
      }
});