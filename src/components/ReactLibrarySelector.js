import React from "react"
import {Query} from "react-apollo";
import gql from "graphql-tag";

import { List, Card } from 'antd';
import ReactLibraryOption from './ReactLibraryOption';

const mockData = [
    {
        title: 'AntD',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Blueprint',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Material UI',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'React Toolbox',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Gatsby',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Fabric',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Evergreen',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Gestalt',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Atlaskit',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Elastic UI',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Grommet',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Semantic UI',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
    },
    {
        title: 'Onsen',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.'
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
                            gutter: 16, xs: 1, sm: 2, md: 4, lg: 6,
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



