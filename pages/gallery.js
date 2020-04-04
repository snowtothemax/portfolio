import TopBarNav from '../components/TopBarNavigator'
import Head from 'next/head'
import Card from '../components/Card'
import meEggs from '../assets/meWithEggs.jpg'
import ImageCard from "../components/ImageCard"
import favs from "../assets/favs.jpg"
import dad from "../assets/dad.jpg"
import ceremony from "../assets/ceremony.jpg"
import fam from "../assets/fam.jpg"
import gang from "../assets/gang.jpg"
import johnMayer from "../assets/johnMayer.jpg"
import meElephants from "../assets/meElephant.jpg"
import nat from "../assets/nat.jpg"
import parks from "../assets/parks.jpg"
import theater from "../assets/theater.jpg"
import theBoys from "../assets/theBoys.jpg"
import theBoys2 from "../assets/theBoys2.jpg"
import will from "../assets/will.jpg"
import humo from "../assets/humo.jpg"
import alsoFavs from "../assets/alsoFavs.jpg"
import wendys from "../assets/wendys.jpeg"

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
                        <ImageCard source={meEggs} height={400} width={600} transform= "400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={johnMayer} height={400} width={500} transform="-400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={dad} height={400} width={500} transform="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={ceremony} height={400} width={600} transform="-400px"rotate="0deg">

                        </ImageCard>
                        <ImageCard source={fam} height={400} width={500} transform ="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={humo} height={400} width={500} transform="-350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={gang} height={400} width={500} transform="400px,-50px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source={favs} height={400} width={600} transform="-400px" rotate="0deg">

                        </ImageCard>
                        
                        <ImageCard source={meElephants} height={600} width={400} transform="300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={nat} height={500} width={400} transform="-300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={parks} height={400} width={600} transform="300px,-100px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source={theater} height={400} width={600} transform="-300px,-100px" rotate="90deg">

                        </ImageCard>
                        <ImageCard source={theBoys} height={400} width={600} transform="400px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={theBoys2} height={400} width={500} transform="-350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={will} height={400} width={600} transform="350px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source={alsoFavs} height={400} width={500} transform="-300px" rotate="0deg">

                        </ImageCard>
                        <ImageCard source ={wendys} height={400} width={500} transform="400px" rotate="90deg">

                        </ImageCard>
                    </div>
                </div>
                
            </div>
        );
    }
}