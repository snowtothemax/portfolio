import TopBarNav from '../components/TopBarNavigator'
import React from 'react'
import ImageCard from "../components/ImageCard"
import Head from 'next/head'


export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hover: false,
        }
    }

    render() {
        var picStyle

        return (
            
            <div className='container-fluid'>
                <Head>
                    <title> Gallery </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                </Head>
                <TopBarNav currentPage = {3} />
                <div style={{flex: 1, display:'flex', flexDirection: 'row', margin:0, padding: 0, border: 0}}>
                    <div className='galleryContent'>
                        <ImageCard source='/meWithEggs.JPG'width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/johnMayer.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/dad.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/ceremony.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/fam.jpg"width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/humo.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/gang.jpg" width={"60vw"} rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/favs.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        
                        <ImageCard source="/meElephant.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/nat.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/parks.JPG" width={"60vw"} rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/theater.jpg" width={"60vw"} rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/theBoys.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/theBoys2.jpg" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/will.JPG" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/alsoFavs.jpg" width={"60vw"} rotate="0deg">

                        </ImageCard>
                        <ImageCard source ="/wendys.JPEG" width={"60vw"} rotate="90deg">

                        </ImageCard>
                    </div>
                </div>
                
            </div>
        );
    }
}