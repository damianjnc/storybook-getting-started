import React from 'react';

import {action} from "@storybook/addon-actions"
import {storiesOf} from "@storybook/react";
import MajorBanner from '../components/major.banner'
import MinorBanner from "../components/minor.banner";

storiesOf('Component | Banners/Major', module)
    .add('With only title', () => (
        <MajorBanner
            title='Banner Title'
            photo='People Outdoors/shutterstock_116403520.jpg'
        />
    ))
    .add('With all text options', () => (
        <MajorBanner
            title='Banner Title'
            photo='People Outdoors/shutterstock_116403520.jpg'
            subtitle='Banner Subtitle'
            body='Banner Body'
        />
    ))

storiesOf('Component | Banners/Minor', module)
    .add('No pictures', () => (
        <MinorBanner
            title='Banner Title'
            subtitle='Banner Subtitle'
            body='Banner Body'
        />
    ))
    .add('With Pictures', () => (
        <MinorBanner
            title='Banner Title'
            subtitle='Banner Subtitle'
            body='Banner Body'
            leftPhoto='Products/boots/shutterstock_66842440.jpg'
            rightPhoto='Products/boots/shutterstock_1121278055.jpg'
        />
    ))