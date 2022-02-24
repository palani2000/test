import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Toggle from './Toggle';
import { Iprops } from './Toggle.types'

function createprop(newprop: Iprops): { Disabled: boolean } {
    let retprop = { Disabled: false };

    if (newprop.Disabled) {
        retprop.Disabled = newprop.Disabled;
    }
    return retprop;
}

let p1 = createprop({ Disabled: false });
let p2 = createprop({ Disabled: false });


storiesOf('Toggle', module)
    .addDecorator(withKnobs)    
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => (
        <Toggle Disabled={boolean('Disabled', p1.Disabled)}
        />
    ))
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Selected', () => (
        <Toggle Disabled={boolean('Disabled', p2.Disabled)}
        />
    ));