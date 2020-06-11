import App, {Container} from 'next/app';
import Page from '../components/Page';
import {ApolloProvider} from  'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
    static async getInitialProps({ Component, ctx}) {
        let pageProps = {};
        if(Component.getInitialProps) {
            pageProps= await Component.getInitialProps(ctx)
        }
        pageProps.query = ctx.query;
        return {pageProps};
    }
    render() {
        // after declaring the following const, we can call apollo (for ex) instead of this.props.apollo
        const {Component, apollo, pageProps} = this.props;
        return(
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

//withData makes available the Apollo Client with the proos
export default withData(MyApp);