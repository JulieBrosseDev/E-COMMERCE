import React, {Component} from 'react'
import Header from './Header';
import Meta from './meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';


const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightGrey: '#E1E1E1',
    OffWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};
// we call div from styled to be able to create a div with special properties simply by calling it with the given nema instead of 'div'. we can apply this to nay kind of component
const StyledPage = styled.div`
    background: pink;
    color: black
    `

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    background: ${props => props.theme.red};
    margin: 0 auto;
    padding: 2rem;
`

class Page extends Component {
    render() {
        return(
            // we give available all the theme properties by wrapping the page into this context
            <ThemeProvider theme={theme}>
                <StyledPage>
                {/* We can change the url img from meta and from the png file in static folder */}
                    <Meta />
                    <Header />
                    <p> I'm page component</p>
                    <Inner>{this.props.children}</Inner>s
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;