//Program to create Toggle
import React, { useState } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './Toggle.styles';


const Toggle = (props) => {
    //Creating state Pressed
    const [Pressed, setPressed] = useState(false)
    const [Selected, setSelected] = useState(false)
    const _onPressfunction = () => {
        setSelected(!Selected)
    }
    const getCirclestyle = () => {
        //Changing circlestyle
        
        var style1;
        if (Selected && Pressed) { style1 = styles.circleSelEnbPressed }
        else if (!Selected && Pressed) { style1 = styles.circleUnselEnbPressed }
        else if (Selected && props.Disabled) { style1 = styles.circleSelDis }
        else if (Selected && !props.Disabled) { style1 = styles.circleSelEnb }            
        else if (!Selected && props.Disabled) { style1 = styles.circleUnselDis }
        else if (!Selected && !props.Disabled) { style1 = styles.circleUnselEnb }
        return style1;
    }

    const getOuterCirlceStyle = () => {
        //Changing outer circle style
        var style1;
        if (Selected && Pressed) { style1 = styles.outerCircleSel }
        else if (!Selected && Pressed) { style1 = styles.outerCircleUnSel }
        return style1;
    }
    const getTogglebarStyle = () => {
        //Changing togglebar style
        var style1;
        if (Selected && props.Disabled) { style1 = styles.togglebarSelDis }
        else if (Selected && !props.Disabled) { style1 = styles.togglebarSelEnb }
        else if (!Selected && props.Disabled) { style1 = styles.togglebarUnselDis}
        else if (!Selected && !props.Disabled) { style1 = styles.togglebarUnselEnb }
        return style1;

    }
    //props = Selected , Disabled 
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.touch}
                onPress={_onPressfunction} disabled={props.Disabled} underlayColor='none'
                onHideUnderlay={() => {
                    setPressed(false);
                }}
                onShowUnderlay={() => {
                    setPressed(true);
                }}
            >
            <View style={getTogglebarStyle()}>
                <View style={getOuterCirlceStyle() } >
                    <View style={getCirclestyle()}> 
                    </View>
                </View>
            </View>

            </TouchableHighlight>
        </View>
    )
}
export default Toggle;
