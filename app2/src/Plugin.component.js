import React from 'react'
import { Provider, useDataQuery } from '@dhis2/app-runtime'

const query = {
    vzs: {
        resource: 'visualizations',
        params: {
            fields: ['id', 'displayName'],
            pageSize: 10
        }
    }
}

export const PluginWrapper = ({ runtimeConfig }) => (
    <Provider config={runtimeConfig}>
        <Plugin />
    </Provider>
)
export const Plugin = () => {
    const { error, data } = useDataQuery(query)

    if (data) {
        return <div>
            <ul>
            {data.vzs.visualizations.map(vz => (
                <li key={vz.id}>{vz.displayName}</li>
            ))}
            </ul>
        </div>
    }
    if (error) {
        return 'Error!'
    }
    return 'Loading...'
}