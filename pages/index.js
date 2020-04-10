import VerticalLine from '../components/verticalLine'
import TopBarNav from '../components/TopBarNavigator'
import ImageCard from "../components/ImageCard"
import React from 'react'
import Head from 'next/head'
import { getURL } from 'next/dist/next-server/lib/utils';


export default class Index extends React.Component {

    render() {
        return (

            <div className='container-fluid'>
                <Head>
                    <title> Home </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                </Head>
                <TopBarNav currentPage={1} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', margin: 0, padding: 0, border: 0 }}>
                    <div className='homeContent'>
                        
                        <div className="divStyle2">
                            <div className= "homeText">
                                <div className="columnText">
                                    <p className="columnText1">Hi!</p>
                                    <text >I'm Max Johnson, a Computer Science and Computer Engineering Student at UW-Madison</text>
                                </div>
                                <img src="/meLake.JPG"></img>
                            </div>
                            <div className="mainText">
                                <VerticalLine/>
                                <div className="mainTextContainer">
                                    <p className="mainTextContainer">
                                            This is one of my first projects in web development and theres a lot for me to learn in the future! Go take a look around at some of my favorite memories and projects if you'd like. If you would like to get in contact with me, just click "Contact"!
                                            
                                    </p>
                                </div>
                                <VerticalLine/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}