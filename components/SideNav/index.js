import Card from '../Card'
import resumeIcon from '../../assets/resume-icon.png'
import elephant from '../../assets/elephantMe.jpg'
import Image from 'react'

export default class SideNav extends React.Component{
    render(){
        return(
            <div style={{ background: "#E8E8E8", width: '10%', height: '100vh', display: 'flex', flexDirection: 'column'}}>
                <Card height = '30%' clickable={true} >
                    <img src={resumeIcon} style={{height: 50, width: 50, paddingTop: 10}}></img>
                </Card>
                <Card height = '30%' clickable={true}>

                </Card>
                <Card height = '40%' clickable={false}>
                    <img src={elephant} style={{height: '100%', width: '100%', opacity: .5}} >
                    </img>
                </Card>
            </div>
        );
    }
}