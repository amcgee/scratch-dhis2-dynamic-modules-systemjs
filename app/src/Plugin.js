import { useConfig } from '@dhis2/app-runtime'
import React, { useEffect, useState } from 'react'
import Parcel from 'single-spa-react/parcel'

export const Plugin = ({ appName }) => {
    const [appModule, setAppModule] = useState()
    const runtimeConfig = useConfig()
    useEffect(() => {
        System.import(`@dhis2-apps/${appName}-plugin`)
            .then(app => {
                setAppModule(app)
            })
    }, [])
    return <div style={{ border: '1px solid black', marginTop: 8}}>
        <div style={{ padding: 4, borderBottom: '1px solid #999'}}>
            {appModule ? appModule.name : 'Loading...'}
        </div>
        {appModule && (<Parcel 
            config={appModule}
            runtimeConfig={runtimeConfig}
        />)}
    </div>
}