import Card from '../Card'
import React from 'react'
import Router from "next/router"
import Head from 'next/head'


export default class TopBarNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardHeight: 40,
            currentPage: this.props.currentPage,
        }
    }



    render() {
        var selectColor1 = "#000000";
        var selectColor2 = "#000000";
        var selectColor3 = "#000000";
        var selectColor4 = "#000000";


        return (
            <div className='topbar'>
                {/* My name and wisconsin Image */}
                <Card clickable={false} height='100%' width='40vw'>
                    <img src="/color-UWcrest-print.png" style={{height:'auto', paddingLeft: 0, height: 70, maxWidth: "10vw", position: 'initial'}}></img>
                    <text style={{ fontFamily: 'Gilroy', fontSize: "3.5vw", paddingLeft: 20,}}>
                        Max Johnson
                </text>
                </Card>

                {/* Home Button */}
                
                <Card clickable={true} height={this.state.cardHeight} width='13vw' onClick={() => Router.push("/")}>
                    <text style={{ paddingTop: 17, fontSize: "2vw", fontFamily: 'Gilroy', color: selectColor1, paddingRight: 20}}>
                        Home
                    </text>
                </Card>
                

                {/* Projects Button */}
                
                <Card clickable={true} height={this.state.cardHeight} width='13vw' onClick={() => Router.push("/projects")}>
                    <text style={{ paddingTop: 17, fontSize: "2vw", fontFamily: 'Gilroy', color: selectColor2, paddingRight: 20}}>
                        Projects
                    </text>
                </Card>
                

                {/* Gallery Button */}
                
                <Card clickable={true} height={this.state.cardHeight} width='13vw' onClick={() => Router.push("/gallery")}>
                    <text style={{ paddingTop: 17, fontSize: "2vw", fontFamily: 'Gilroy', color: selectColor3, paddingRight: 20 }}>
                        Gallery
                    </text>
                </Card>
                

                {/** Contact Button */}
                
                <Card clickable={true} height={this.state.cardHeight} width='13vw' onClick={() => Router.push("/contact")}>
                    <text style={{ paddingTop: 17, fontSize: "2vw", fontFamily: 'Gilroy', color: selectColor4 }}>
                        Contact
                    </text>
                </Card>
                

                {/**picture of me */}
                <Card clickable={false} height={this.state.cardHeight} width='8vw'>
                    <img src='/meAvatar.JPG' style={{ borderRadius: '50%', height: 'auto', maxWidth: '4vw', transform: 'translate(0,1.2vw)', position: 'absolute' }}>
                    </img>
                </Card>
            </div>
        )
    }
}