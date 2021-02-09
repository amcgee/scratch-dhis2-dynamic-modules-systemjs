import React, { useEffect, useState } from 'react'
import { useConfig } from '@dhis2/app-runtime'
import AppAdapter from '@dhis2/app-adapter'
import { CssReset } from '@dhis2/ui'

import Parcel from 'single-spa-react/parcel'
import 'typeface-roboto'

const baseConfig = {
    url:"https://debug.dhis2.org/dev",
    apiVersion: 35
}
const AppWrapper = ({ appName }) => {
    const runtimeConfig = useConfig()
    return <Parcel 
        config={() => System.import('@dhis2-apps/example')}
        runtimeConfig={runtimeConfig}
    />
}
export const Shell = () => {
    const [appName, setAppName] = useState('')
    useEffect(() => {
        System.import('@dhis2-apps/example')
            .then(app => {
                setAppName(app.name)
            })
    }, [])
    return <>
        <CssReset />
        <AppAdapter {...baseConfig} appName={appName + '!!!'} >
            <AppWrapper appName={appName}/>
        </AppAdapter>
    </>
}