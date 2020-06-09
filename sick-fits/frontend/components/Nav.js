import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/sell">
            <a>SELL IT</a>
        </Link><br/>
        <Link href="/">
            <a>HOME</a>
        </Link>
    </div>
);

export default Nav;