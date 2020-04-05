import TopBarNav from '../components/TopBarNavigator'
import Head from 'next/head'
import insta from '../assets/instaHover.png'
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"
import linkedIn from "../assets/linkedIn.png"
import VerticalLine from "../components/verticalLine"
import Card from "../components/Card"
import emailIcon from "../assets/emailIcon.png"
import Router from 'next/router'


export default class Contact extends React.Component {
    render() {
        return (

            <div className='container'>

                <TopBarNav currentPage={4} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', margin: 0, padding: 0, border: 0 }}>
                    <div className='galleryContent'>

                        {/** Contact Me Bit */}
                        <div style={{ maxHeight: '40vh', maxWidth: '100vw', justifyContent: 'center', textAlign: 'center', flex: 1, display: 'flex' }}>
                            <p style={{ fontFamily: 'Gilroy', fontSize: 40, flex: 1, marginTop: 120 }}>
                                here's how you can contact me.
                            </p>

                        </div>

                        {/**Facebook n LinkedIn */}
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", textAlign: 'center', margin: 20 }}>
                            <Card height="auto" width="auto" clickable={true} >
                                <img src={linkedIn} style={{ maxHeight: 50, maxWidth: 50, marginRight: 20 }}>

                                </img>
                            </Card>
                            <Card height="auto" width="auto" clickable={true}  >
                                <img src={facebook} style={{ maxHeight: 35, maxWidth: 35, marginRight: 30, marginTop: 7 }}>

                                </img>
                            </Card>
                            <div style={{ borderLeft: '2px solid black', height: '70%', justifyContent: 'center', transform: "translate(0, 7px)" }}>
                            </div>
                            <div style={{ justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                                <text style={{ fontFamily: "Gilroy", fontSize: 30, marginLeft: 20, marginTop: 5 }}>
                                    Maxwell Johnson
                                    </text>
                            </div>
                        </div>

                        {/** Instagram n Github */}
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", textAlign: 'center',margin: 20 }}>
                            <Card clickable={true} height="auto" width="auto">
                                <img src={insta} style={{maxHeight:70, maxWidth: 70, marginTop:7,  marginRight: 0,marginLeft: -37}}>

                                </img>
                            </Card>
                            <Card clickable={true} height="auto" width="auto">
                                <img src={github} style={{maxHeight:50, maxWidth:50, marginTop:0,  marginRight: 20}}>

                                </img>
                            </Card>
                            <div style={{ borderLeft: '2px solid black', height: '80%', justifyContent: 'center', transform: "translate(0, 7px)" }}>
                            </div>
                            <div style={{ justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                                <text style={{ fontFamily: "Gilroy", fontSize: 30, marginLeft: 20, marginTop: 5 }}>
                                    snowtothemax
                                </text>
                            </div>
                        </div>

                        {/** Email */}
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", textAlign: 'center',margin: 20, marginLeft:50 }}>
                            <Card clickable={false} height="auto" width="auto">
                                <img src={emailIcon} style={{maxHeight:40, maxWidth: 40, marginTop:7,  marginRight: 20}}>

                                </img>
                            </Card>
                            <div style={{ borderLeft: '2px solid black', height: '80%', justifyContent: 'center', transform: "translate(0, 7px)" }}>
                            </div>
                            <div style={{ justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                                <text style={{ fontFamily: "Gilroy", fontSize: 30, marginLeft: 20, marginTop: 5 }}>
                                    mkjohnson9@wisc.edu
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}