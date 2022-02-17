import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

const Options = () => {
    return (
        <ListGroup>
            
            <br/>
            <br/>
            <ListGroupItem tag="a" href='/addslot' action>book slots </ListGroupItem>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ListGroupItem tag="a" href='/viewslot' action>view booked slots </ListGroupItem>
            <br/>
            <br/>
            <br/>
            <br/>
        </ListGroup>
    );
};

export default Options;
