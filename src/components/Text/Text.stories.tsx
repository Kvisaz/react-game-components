import { Meta } from '@storybook/react';
import {Text} from './index';

export default {
    title: 'Text',
    component: Text,
} as Meta;

export const DefaultFontSize: Meta = {
    args: {
        text: 'Пример текста',
    }
}


export const CustomFontSize: Meta = {
    args: {
        text: 'Пример текста',
        fontSize: '32px'
    }
}
