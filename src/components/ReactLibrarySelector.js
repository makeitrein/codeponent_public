import React from "react"
import {Query} from "react-apollo";
import gql from "graphql-tag";

import { List, Card } from 'antd';
import ReactLibraryOption from './ReactLibraryOption';

const mockData = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];


const ReactLibrarySelector = (client) => (
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
                    <List
                        grid={{
                            gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                        }}
                        dataSource={mockData}
                        renderItem={item => (
                            <ReactLibraryOption />
                        )}
                    />
            </div>)
        }}
    </Query>
);

export default ReactLibrarySelector;



