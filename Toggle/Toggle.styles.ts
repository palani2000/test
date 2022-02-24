import React from "react";
import { StyleSheet } from "react-native";
import { Pallete } from "../Colors/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width : 148, height : 178,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor : Pallete.Toggle.backgroundColor,
    },
    touch: {
        width : 34, height : 14,
    },
    togglebarSelEnb: {
        flex: 1, 
        width : 34, height : 14,
        borderRadius: 7,
        top : 3,
        backgroundColor : Pallete.system.primary400,
        opacity : 0.38,     
    },
    togglebarSelDis: {
        flex: 1, 
        width : 34, height : 14,
        borderRadius: 7,
        top : 3,
        backgroundColor : Pallete.system.primary400,
        opacity: 0.38,     
    },
    togglebarUnselEnb: {
        flex: 1, 
        width : 34, height : 14,
        borderRadius: 7,
        top : 3,
        backgroundColor : Pallete.Toggle.togglebarNotselColor,
    },
    togglebarUnselDis: {
        flex: 1, width : 34, height : 14,
        borderRadius: 7,
        top : 3,
        backgroundColor : Pallete.Toggle.togglebarNotselColor,     
    },

    circleSelEnb: {     //selected and not disabled 
        height: 20,
        width: 20,
        top: -3, left : 14, 
        borderRadius: 20,
        backgroundColor : Pallete.button.primary,
        position : 'absolute',
    },
    circleSelEnbPressed: {     //selected and pressing the button 
        height: 20,
        width: 20,
        left : 10, // 14,
        borderRadius: 20,
        backgroundColor : Pallete.button.primary,
        position : 'absolute',
    },

    circleUnselEnb: {   //Not selected and not disabled
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor : Pallete.text.body2,
        top: -3, left : 0,
        position : 'absolute',
    },
    circleUnselEnbPressed: {   //Not selected and not disabled
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor : Pallete.text.body2,
        top: 10, left : 10,
        position : 'absolute',
    },
    circleSelDis: {  //Selected and disabled
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor : Pallete.button.primary,
        top: -3, left : 14, 
        position : 'absolute',
    },
    circleUnselDis: {   //Not selected and disabled
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor : Pallete.text.body2,
        top: -3, left : 0, 
    },
    outerCircleSel: {
        height: 40,
        width: 40,
        left : 4,
        top : -14, 
        borderRadius: 80,
        borderWidth: 1,
        borderColor: Pallete.system.primary,
        backgroundColor: Pallete.system.primary500,
        alignItems: 'center',
        justifyContent: 'center',
 
    },
    outerCircleUnSel: {
        height: 40,
        width: 40,
        top : -13, 
        left : -10, 
        borderRadius: 80,
        backgroundColor: 'black', //Pallete.text.body2,
        opacity: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default styles;