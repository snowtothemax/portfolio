export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickable: this.props.clickable,   //If the card is clickable or not
            hover: false        //whether the card should hover or not
        }
    }

    render() {
        //checks to see if hover is true and which style to choose
        var linkStyle;
        if(this.state.hover){
            linkStyle={ width: this.props.width, maxHeight: this.props.height, background: '#FFFFFF', cursor: 'pointer', flexDirection: 'column', display: 'flex', alignItems: 'center', opacity: 1}
        }else{
            linkStyle={ width: this.props.width, maxHeight: this.props.height, background: '#FFFFFF', flexDirection: 'column', display: 'flex', alignItems: 'center', opacity: .4}
        }


        if (this.state.clickable) {
            //the Card that is created if clickable is true
            return (
                <div style={linkStyle} onMouseEnter={() => this.setState({hover: !this.state.hover})} onMouseLeave={() => this.setState({hover: !this.state.hover})} onClick={() => this.props.onClick}>
                    {this.props.children}
                </div>
            )

            //the card that is created if false
        } else {
            return (
                <div style={{ width: this.props.width, maxHeight: this.props.height, background: '#FFFFFF',flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', }}>
                    {this.props.children}
                </div>
            )
        }
    }
}