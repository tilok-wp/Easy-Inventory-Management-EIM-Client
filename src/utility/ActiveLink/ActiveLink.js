import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            className={`font-bold p-3 ${match ? 'text-color-primary' : ''}`}
            to={to}
            {...props}>

            {children}
        </Link>
    );
};

export default ActiveLink;