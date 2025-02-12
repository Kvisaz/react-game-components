import { Meta } from '@storybook/react';
import {ButtonTest} from './index';

export default {
    title: 'Components/ButtonTest',
    component: ButtonTest,
} as Meta;

export const Primary: Meta = {
    args: {
        text: 'Click me',
        onClick: () => console.log('Button clicked'),
    }
}

export const Second: Meta = {
    args: {
        text: 'Another Test button for same component',
        onClick: () => console.log('Second Button clicked'),
    }
}
