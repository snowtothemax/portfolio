import uwLogo from '../../resources/color-UWcrest-print.png'
import mePhoto from '../../resources/me.jpg'

export default class Header extends React.PureComponent {
    render() {
        return (

            <div style={{ backgroundImage: `url(${mePhoto})` }}>
                <div style={{ maxWidth: "100vw", maxHeight: "12vh", flexDirection: 'row', textAlign: 'left', display: 'flex', position: 'inherit', background: 'rgba(255,255,255,.5)' }}>
                    <img src={uwLogo} style={{ maxHeight: '100%', width: '5%' }}></img>
                    <text style={{ fontFamily: 'Helvetica', fontSize: '12vh', paddingLeft: 20 }}>
                        Max Johnson
                </text>
                </div>
            </div>
        );
    }


}