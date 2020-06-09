// BEST PRACTICE : 1st import packages, then your local components

import { responsePathAsArray } from 'graphql';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav'
import Link from 'next/link';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}



const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1300px) {
            grid-template-columns: auto 1fr;
            justify-content: center;

        }

    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${props => props.theme.lightgrey}
    }
`;


const Header = () => (
    <StyledHeader>
    <Logo />
        <div className="bar">
            <h1>
                <Link href='/'>
                    <a>SportOutRent</a>
                </Link>
            </h1>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>cARTE</div>
    </StyledHeader>
)

export default Header;