import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap'

const UserSlot = ({slot, update}) => {
    
    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>slot no.={slot.slot_id}</CardSubtitle>
                <CardText>vehicle no.={slot.veh_id}</CardText>
                <CardText>owner = {slot.owner}</CardText>
                <CardText>type = {slot.veh_type}</CardText>
                <CardText>duration = {slot.duration}</CardText>
             
            </CardBody>
        </Card>
    )
}

export default UserSlot