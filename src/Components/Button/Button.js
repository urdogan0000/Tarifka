import React from "react";
import { TouchableOpacity,View,Text } from "react-native";
import styles from './Button.style'

function Button({title,onPress}){
   
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button