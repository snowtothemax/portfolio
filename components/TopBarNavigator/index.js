import Card from '../Card'
import uwLogo from '../../resources/color-UWcrest-print.png'
import mePhoto from '../../resources/meAvatar.jpg'
import Link from 'next/link'

export default class TopBarNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardHeight: 40,
            currentPage: this.props.currentPage,
        }
    }



    render() {
        var selectColor1 = '#1F45FC';
        var selectColor2 = '#000000';
        var selectColor3 = '#000000';
        var selectColor4 = '#000000';

        if (this.state.currentPage == 2) {
            selectColor1 = '#000000';
            selectColor2 = '#1F45FC';
        }
        if (this.state.currentPage == 3) {
            selectColor1 = '#000000';
            selectColor2 = '#1F45FC';
        }
        if (this.state.currentPage == 4) {
            selectColor1 = '#000000';
            selectColor2 = '#1F45FC';
        }

        return (
            <div className='topbar'>

                {/* My name and wisconsin Image */}
                <Card clickable={false} height='100%' width='30vw'>
                    <img src={uwLogo} style={{ paddingLeft: 55, height: 70, maxWidth: 60 }}></img>
                    <text style={{ fontFamily: 'arial', fontSize: 50, paddingLeft: 20, flex: 1 }}>
                        Max Johnson
                </text>
                </Card>

                {/* Home Button */}
                <Link href="/" as="home">
                <Card clickable={true} height={this.state.cardHeight} width='15vw'>
                    <text style={{ paddingTop: 17, fontSize: 40, fontFamily: 'arial', color: selectColor1 }}>
                        Home
                    </text>
                </Card>
                </Link>

                {/* Projects Button */}
                <Link href="/projects" as="projects">
                <Card clickable={true} height={this.state.cardHeight} width='15vw'>
                    <text style={{ paddingTop: 17, fontSize: 40, fontFamily: 'arial', color: selectColor2 }}>
                        Projects
                    </text>
                </Card>
                </Link>

                {/* Gallery Button */}
                <Link href="/gallery" as="gallery">
                <Card clickable={true} height={this.state.cardHeight} width='15vw'>
                    <text style={{ paddingTop: 17, fontSize: 40, fontFamily: 'arial', color: selectColor3 }}>
                        Gallery
                    </text>
                </Card>
                </Link>

                {/** Contact Button */}
                <Link href="/contact" as="contact">
                <Card className='Card' clickable={true} height={this.state.cardHeight} width='15vw'>
                    <text style={{ paddingTop: 17, fontSize: 40, fontFamily: 'arial', color: selectColor4 }}>
                        Contact
                    </text>
                </Card>
                </Link>

                {/**picture of me */}
                <Card clickable={false} height={this.state.cardHeight} width='10vw'>
                    <img className="avatar" src={mePhoto} style={{ borderRadius: '50%', height: 50, width: 50, transform: 'translate(0,20px)', position: 'absolute' }}>
                    </img>
                </Card>

                <style jsx>{`
                .topbar {
                    margin:0;
                    padding:0;
                    border:0;
                    max-height:40;
                    max-width: 100%;
                    flex-direction: row;
                    display: flex;
                }
                
                .avatar img {
                    border-radius: 50%;
                    height: 50;
                    width: 50;
                    transform: translate(0,20px);
                    position: absolute;
                }
            `}</style>
            </div>
        )
    }
}