import React from 'react';
import {connect} from 'react-redux'
import {UserData} from "../types";
import {getTopUsersByPasta} from "../selectors";
import {capitalizeFirstLetter} from "../Utils";

interface OwnProps {
    pasta: string;
}

const Display: React.FC<{ users: UserData[], pasta: string }> = ({users, pasta}) => (
    <div className='display-pastaDisplay'>
        <div className='display-pastaDisplayTitle'>{capitalizeFirstLetter(pasta)}</div>


        <div className='display-userList'>
            {users && users.map(user =>
                <div className='display-userListItem'>
                    <div className={user.gender === 'female' ? 'display-userListBullet female':'display-userListBullet male'}>&nbsp;</div>
                    <div className='display-userListContainer'>

                        <span className='display-userListName'>{user.name.split(' ')[0]}</span>
                        <span
                            className='display-userListNumber'>{user.favorites[pasta]!.toFixed(2)}</span
                        ></div>
                </div>
            )}
        </div>

    </div>

);

const mapStateToProps = (state: any, ownProps: OwnProps) => {
    const users: UserData[] = getTopUsersByPasta(state, ownProps.pasta)
    return {
        users
    }
};

export default connect(mapStateToProps)(Display);
