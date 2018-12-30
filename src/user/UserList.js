import React from "react"
import {Query} from "react-apollo";
import gql from "graphql-tag";

import { Table, Divider, Tag } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => <a href="javascript:;">{record.firstName} {record.lastName}</a>,
}, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags = []) => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
    ),
}];


const UserList = (client) => (
    <Query
        query={gql`
      {
        allUsers {
    nodes {
      id
      lastName
      firstName
    }
  }
      }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (<div>
                <Table columns={columns} dataSource={data.allUsers.nodes} />
            </div>)
        }}
    </Query>
);

export default UserList;