import VerticalLine from '../components/verticalLine'
import TopBarNav from '../components/TopBarNavigator'
import ImageCard from "../components/ImageCard"
import imageLake from "../assets/meLake.jpg"


export default class Index extends React.Component {

    render() {
        return (

            <div className='container'>

                <TopBarNav currentPage={1} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', margin: 0, padding: 0, border: 0 }}>
                    <div className='homeContent'>
                        
                        <div style={{ marginLeft: 60, marginRight: 60, paddingTop: 50, maxWidth: '100vw', flex: 1, display: "flex", flexDirection: 'column', textAlign: 'center' }}>
                            <div style={{ width: '100vw', height: 'auto', flex: 1, flexDirection: 'row', display: 'flex', textAlign: 'center', justifyContent:'center' }}>
                                <div style={{flex: 1, justifyContent: 'center', textAlign: 'center', flexDirection: 'column', display: 'flex', paddingTop: 50}}>
                                    <text style={{fontFamily: "Gilroy", fontSize: '10vw', flex:1}}>Hi!</text>
                                    <text style={{fontFamily: "Gilroy", fontSize: 20, flex: 1}}>I'm Max Johnson, a Computer Science Student at UW-Madison</text>
                                </div>
                                <img src={imageLake} style={{height: 400, width: 540, marginRight: 100}}></img>
                            </div>
                            <div style={{paddingTop: 50,width: '100vw', height: 'auto', flex: 1, flexDirection: 'row', display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                <VerticalLine/>
                                <div style={{maxWidth: '80vw', height:'auto', flex: 1, paddingTop: 30}}>
                                    <p style={{fontFamily: "Gilroy", fontSize: 20}}>
                                        This is my little website about me!
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