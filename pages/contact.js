import TopBarNav from '../components/TopBarNavigator'
import Head from 'next/head'

export default class Contact extends React.Component {
    render() {
        return (
            
            <div className='container' title="Max Johnson Home">
                
                <TopBarNav currentPage = {4} />
                <div style={{flex: 1, display:'flex', flexDirection: 'row', margin:0, padding: 0, border: 0}}>
                    <div className='homeContent'>
                        <text >
                            How to get in Contact With Me
                    </text>

                    </div>
                </div>

                
                <style jsx global>{`
                    .container {
                        margin: 0;
                        padding: 0;
                        border: 0;
                        max-height: 100vh;
                        max-width: 100vw;
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .homeContent{
                        margin: 0;
                        padding: 0;
                        border: 0;
                        height: 100vh;
                        width: 100vw;
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        text-align: center;
                    }
                    `}</style>
            </div>
        );
    }
}