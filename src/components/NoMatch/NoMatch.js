import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const NoMatch = () => {
    return (
        <Container className="text-center">
            <Header></Header>
            <h1 className="mt-5">Sorry!!! Nothing Has Been Found ☹</h1>
            <img src="/notFound.gif" alt=""/>
        </Container>
    );
};

export default NoMatch;