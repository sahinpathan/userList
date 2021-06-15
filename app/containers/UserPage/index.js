import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchUsers } from './actions';
import { makeSelectLoading, makeSelectError } from '../App/selectors';
import Table from '../../components/Table';
import Input from '../HomePage/Input';

const headers = [
  {
    title: 'User Name',
  },
  {
    title: 'Phone',
  },
  {
    title: 'Email',
  },
  {
    title: 'Action',
  },
];
export function UserPage({ loading, error, data, onInit, onSearch }) {
  useInjectReducer({ key: 'users', reducer });
  useInjectSaga({ key: 'users', saga });

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div>
      <Helmet>
        <title>UserPage</title>
        <meta name="description" content="Description of UserPage" />
      </Helmet>
      <Input
        id="username"
        type="text"
        placeholder="search by user name"
        onChange={onSearch}
      />
      <Table
        headers={headers}
        addbtn
        loading={loading}
        error={error}
        tableRow={data}
      />
    </div>
  );
}

UserPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

UserPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onInit: PropTypes.func,
  onSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectUserPage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInit: () => dispatch(fetchUsers()),
    onSearch: e => dispatch(fetchUsers(e.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserPage);
