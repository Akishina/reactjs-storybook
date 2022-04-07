import React from 'react';
import { CustomText } from "../components/CustomText";

export default {
    title: 'Components/Custom Text',
    component: CustomText
}

const Template = (args) => <CustomText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    description: 'Description'
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Title 1',
    description: 'Description 2'
};