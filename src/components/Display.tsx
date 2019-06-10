import React from 'react';
import {connect} from 'react-redux'
import {UserData} from "../types";
import {getTopUsersByPasta} from "../selectors";

interface OwnProps {
    pasta: string;
}

const Display: React.FC<{ users: UserData[], pasta: string }> = ({users, pasta}) => (
    <div>
        <div>{pasta}</div>
        <ul>  {users && users.map(user => <li>{user.name} {user.gender} {user.favorites[pasta]!}</li>)}</ul>

    </div>

);

const mapStateToProps = (state: any, ownProps: OwnProps) => {
    const users: UserData[] = getTopUsersByPasta(state,ownProps.pasta)
    return {
        users
    }
};

export default connect(mapStateToProps)(Display);
