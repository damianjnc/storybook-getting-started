import React from 'react'

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react";
import CallToAction from '../components/form/cta-button'

storiesOf('Button', module )
    .add('Enabled', ()=>(
        <CallToAction label="Submit" onClick={action('button-click')} />
))