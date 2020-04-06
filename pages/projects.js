import TopBarNav from '../components/TopBarNavigator'
import Head from 'next/head'
import React from 'react'

export default class Project extends React.Component {
    render() {
        return (
            
            <div className='container'>
                
                <TopBarNav currentPage = {2} />
                <div style={{flex: 1, display:'flex', flexDirection: 'row', margin:0, padding: 0, border: 0}}>
                    <div className='homeContent'>
                        <text style={{fontFamily: "Gilroy", fontSize: 70, marginTop: 100}}>
                            coming soon!
                        </text>

                    </div>
                </div>
            </div>
        );
    }
}