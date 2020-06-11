import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            image
            largeImage
        }
    }
`

class items extends Component {
    render() {
        return (
            <div>
                <p>Items !</p>
                <Query query={ALL_ITEMS_QUERY}>
                    {({data, error, loading}) => {
                        console.log(data);
                        console.log(error)
                        return <p>I found</p>
                    } }
                </Query>
            </div>
        );
    }
}

export default items;