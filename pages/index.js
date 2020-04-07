import VerticalLine from '../components/verticalLine'
import TopBarNav from '../components/TopBarNavigator'
import ImageCard from "../components/ImageCard"
import React from 'react'
import { getURL } from 'next/dist/next-server/lib/utils';


export default class Index extends React.Component {

    render() {
        return (

            <div className='container'>

                <TopBarNav currentPage={1} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', margin: 0, padding: 0, border: 0 }}>
                    <div className='homeContent'>
                        
                        <div style={{ marginLeft: 60, marginRight: 60, paddingTop: 50, maxWidth: '100vw', flex: 1, display: "flex", flexDirection: 'column', textAlign: 'center' }}>
                            <div style={{ width: '100vw', height: 'auto', flex: 1, flexDirection: 'row', display: 'flex', textAlign: 'center', justifyContent:'center' }}>
                                <div style={{flex: 1, justifyContent: 'center', textAlign: 'center', flexDirection: 'column', display: 'flex', paddingTop: 50, maxWidth: '40vw',marginRight: 40}}>
                                    <text style={{fontFamily: "Gilroy", fontSize: 100, flex:1}}>Hi!</text>
                                    <text style={{fontFamily: "Gilroy", fontSize: 20, flex: 1}}>I'm Max Johnson, a Computer Science and Computer Engineering Student at UW-Madison</text>
                                </div>
                                <img src="./meLake.jpg" style={{height: 300, width: 400, marginRight: 100}}></img>
                            </div>
                            <div style={{paddingTop: 50,width: '100vw', height: 'auto', flex: 1, flexDirection: 'row', display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                <VerticalLine/>
                                <div style={{maxWidth: '60vw', height:'auto', flex: 1, paddingTop: 30, margin:40}}>
                                    <p style={{fontFamily: "Gilroy", fontSize: 20}}>
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