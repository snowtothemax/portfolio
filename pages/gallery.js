import TopBarNav from '../components/TopBarNavigator'
import React from 'react'
import ImageCard from "../components/ImageCard"


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
            
            <div className='container'>
                
                <TopBarNav currentPage = {3} />
                <div style={{flex: 1, display:'flex', flexDirection: 'row', margin:0, padding: 0, border: 0}}>
                    <div className='galleryContent'>
                        <ImageCard source='/meWithEggs.JPG' height={400} width={600} transform= "400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/johnMayer.JPG" height={400} width={500} transform="-400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/dad.JPG" height={400} width={500} transform="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/ceremony.JPG" height={400} width={600} transform="-400px"rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/fam.jpg" height={400} width={500} transform ="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/humo.JPG" height={400} width={500} transform="-350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/gang.jpg" height={400} width={500} transform="400px,-50px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/favs.JPG" height={400} width={600} transform="-400px" rotate="0deg">

                        </ImageCard>
                        
                        <ImageCard source="/meElephant.JPG" height={600} width={400} transform="300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/nat.JPG" height={500} width={400} transform="-300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/parks.JPG" height={400} width={600} transform="300px,-100px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/theater.jpg" height={400} width={600} transform="-300px,-100px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/theBoys.JPG" height={400} width={600} transform="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/theBoys2.jpg" height={400} width={500} transform="-350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/will.JPG" height={400} width={600} transform="350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/alsoFavs.jpg" height={400} width={500} transform="-300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source ="/wendys.JPEG" height={400} width={500} transform="400px" rotate="90deg">

                        </ImageCard>
                    </div>
                </div>
                
            </div>
        );
    }
}