import React from "react"
import {Query} from "react-apollo";
import gql from "graphql-tag";

import { List, Card } from 'antd';
import ReactLibraryOption from './ReactLibraryOption';

const mockData = [
    {
        title: 'AntD',
    },
    {
        title: 'Blueprint',
    },
    {
        title: 'Material UI',
    },
    {
        title: 'React Toolbox',
    },
    {
        title: 'Gatsby',
    },
    {
        title: 'Fabric',
    },
    {
        title: 'Fabric',
    },
    {
        title: 'Evergreen',
    },
    {
        title: 'Gestalt',
    },
    {
        title: 'Atlaskit',
    },
    {
        title: 'Elastic UI',
    },
    {
        title: 'Grommet',
    },
    {
        title: 'Semantic UI',
    },
    {
        title: 'Onsen',
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
                            gutter: 16, xs: 1, sm: 2, md: 4, lg: 6, xl: 8,
                        }}
                        dataSource={mockData}
                        renderItem={item => (
                            <ReactLibraryOption {...item} />
                        )}
                    />
            </div>)
        }}
    </Query>
);

export default ReactLibrarySelector;



