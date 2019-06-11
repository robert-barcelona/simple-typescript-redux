import React from 'react';
import {storeData} from "../actions";
import {connect} from 'react-redux'
import Display from "./Display";

class Main extends React.Component {

    componentDidMount() {
        // @ts-ignore
        this.props.storeData()
    }

    render() {
        return <div className='main-container'>
            <div className='title-box'>PASTA FANS</div>
            <Display pasta={'fusilli'}/>
            <Display pasta={'spaghetti'}/>
            <Display pasta={'farfalle'}/>
            <Display pasta={'orecchiette'}/>
        </div>

    }

}

const mapDispatchToProps = (dispatch: any) => ({
    storeData: () => {
        dispatch(storeData())
    },
});

export default connect(null, mapDispatchToProps)(Main);
