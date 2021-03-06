import Card from "../Card"
import React from 'react'

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            hover: false,
            height: this.props.height,
            width: this.props.width,
            transform: this.props.transform,
            hoverEnable: true
        }
    }

    render() {
        var imgStyle;
        const hoverHeight= this.state.height*1.05;
        const hoverWidth = this.state.width*1.05;

        if(this.state.hover){
            
            imgStyle={boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', orientation: 90, maxWidth: hoverWidth, height: "auto", margin: "5vw"}
        }else{
            imgStyle={boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', orientation: 90, maxWidth: this.state.width, height: "auto", margin: "5vw"} 
        }

        return (
            <Card width="auto" height='auto'>
               
                <img src={this.props.source} style={imgStyle} onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}></img>
            </Card>
        )
    }
}