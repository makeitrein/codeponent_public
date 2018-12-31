import React from "react"
import {Query} from "react-apollo";
import gql from "graphql-tag";

import { List, Card } from 'antd';
import ReactLibraryOption from './ReactLibraryOption';

const mockData = [
    {
        title: 'AntD',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Blueprint',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Material UI',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'React Toolbox',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Gatsby',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Fabric',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Evergreen',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Gestalt',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Atlaskit',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Elastic UI',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Grommet',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Semantic UI',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
    },
    {
        title: 'Onsen',
        description: 'React components that implement Google’s Material Design. At over 35k Stars (!), it’s the most popular and widely used React UI library on GitHub.',
        image: require("../assets/img/antd.svg")
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
                            gutter: 16, xs: 1, sm: 2, md: 4, lg: 4,
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



