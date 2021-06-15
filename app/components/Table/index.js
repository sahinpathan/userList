import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import { Button } from 'reactstrap';
import TableHeader from '../TableHeader';
import Wrapper from './Wrapper';
import WrapperDiv from './WrapperDiv';
import EditImg from '../../images/edit.jpg';
import DeleteImg from '../../images/delete.jpg';
import EditUser from '../EditUser/Loadable';

import Img from './Img';
import AddBtnWrapper from './addbtnWrapper';
import { deleteUser } from '../../containers/UserPage/api';
import Conformation from '../Conformation';
function Table({ headers, error, tableRow, loading, addbtn }) {
  const [isOpenEditUser, setIsOpenEditUser] = useState(false);
  const [mode, setMode] = useState('add');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (tableRow && tableRow.length > 0) {
    return (
      <>
        {addbtn && (
          <AddBtnWrapper
            type="button"
            onClick={() => {
              setMode('add');
              setIsOpenEditUser(true);
            }}
          >
            Create user
          </AddBtnWrapper>
        )}
        <Wrapper>
          <TableHeader headers={headers} />
          <tbody>
            {tableRow.map(user => (
              <tr key={`user-${user.id}`}>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <WrapperDiv
                    onClick={() => {
                      setMode('edit');
                      setSelectedUser(user);
                      setIsOpenEditUser(true);
                    }}
                  >
                    <Img src={EditImg} alt="Edit" />
                  </WrapperDiv>
                  <WrapperDiv
                    onClick={() => {
                      setSelectedUser(user);
                      setIsDelete(true);
                    }}
                  >
                    <Img src={DeleteImg} alt="Delete" />
                  </WrapperDiv>
                </td>
              </tr>
            ))}
          </tbody>
        </Wrapper>

        {isOpenEditUser && (
          <EditUser
            mode={mode}
            user={selectedUser}
            isOpen={isOpenEditUser}
            onClose={() => {
              setSelectedUser(null);
              setIsOpenEditUser(false);
            }}
          />
        )}

        {isDelete && (
          <Conformation
            isOpen={isDelete}
            message="Are you sure want to delete this user"
            onClose={async d => {
              if (d) {
                await deleteUser(selectedUser.id);
              }
              setSelectedUser(null);
              setIsDelete(false);
            }}
          />
        )}
      </>
    );
  }
  return <ListItem item="No record Found" />;
}

Table.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  headers: PropTypes.any,
  tableRow: PropTypes.any,
};

export default Table;
