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
                        <ImageCard source='/meWithEggs.jpg' height={400} width={600} transform= "400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/johnMayer.jpg" height={400} width={500} transform="-400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/dad.jpg" height={400} width={500} transform="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/ceremony.jpg" height={400} width={600} transform="-400px"rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/fam.jpg" height={400} width={500} transform ="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/humo.jpg" height={400} width={500} transform="-350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/gang.jpg" height={400} width={500} transform="400px,-50px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/favs.jpg" height={400} width={600} transform="-400px" rotate="0deg">

                        </ImageCard>
                        
                        <ImageCard source="/meElephant.jpg" height={600} width={400} transform="300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/nat.jpg" height={500} width={400} transform="-300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/parks.jpg" height={400} width={600} transform="300px,-100px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/theater.jpg" height={400} width={600} transform="-300px,-100px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source="/theBoys.jpg" height={400} width={600} transform="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/theBoys2.jpg" height={400} width={500} transform="-350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/will.jpg" height={400} width={600} transform="350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source="/alsoFavs.jpg" height={400} width={500} transform="-300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source ="/wendys.jpeg" height={400} width={500} transform="400px" rotate="90deg">

                        </ImageCard>
                    </div>
                </div>
                
            </div>
        );
    }
}