import TopBarNav from '../components/TopBarNavigator'
import Head from 'next/head'
import React from 'react'

export default class Project extends React.Component {
    render() {
        return (
            
            <div className='container-fluid'>
                <Head>
                    <title> Projects </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                </Head>
                <TopBarNav currentPage = {2} />
                <div style={{flex: 1, display:'flex', flexDirection: 'row', margin:0, padding: 0, border: 0}}>
                    <div className='projectContent'>
                        <text>
                            coming soon!
                        </text>

                    </div>
                </div>
            </div>
        );
    }
}