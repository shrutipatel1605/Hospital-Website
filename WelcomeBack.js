class WelcomeBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Care',
            apppVersion: '1'
        }
    }

    render(){
        return(
            <>
                <h2>Day {this.state.name || 'Friend'} Hospital</h2>
                {
                    this.state.apppVersion && this.state.apppVersion < 2
                    ? <p> An Apple a Day keeps the Doctor Away</p> 
                    : ''
                }
                <CoolButton customText={this.state.apppVersion && this.state.apppVersion < 2 ? 'Feedback' : 'Download'} />
            </>
        )
    }


}