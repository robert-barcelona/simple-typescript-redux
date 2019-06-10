import React from 'react';
import {storeData} from "../actions";
import {connect} from 'react-redux'
import Display from "./Display";

class App extends React.Component {

    componentDidMount() {
        // @ts-ignore
        this.props.storeData()
    }

    render() {
        return <div>
            <Display pasta={'fusilli'}/>
            <Display pasta={'spaghetti'}/>
            <Display pasta={'farfalle'}/>
            <Display pasta={'orecchiette'}/>
        </div>

    }

}

const mapDispatchToProps = (dispatch: any) => ({
    storeData: () => {
        console.log('about to');
        dispatch(storeData())
    },
});

export default connect(null, mapDispatchToProps)(App);
