import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap'
import slot_url from '../api/slotsapi'

const Slot = ({slot, update}) => {
    const deleteSlot = (slot_id) => {
        axios.delete(`${slot_url}/delete/${slot_id}`).then(
            (response)=>{
                toast.success("slot is free");
                update(slot_id);
            },
            (error) => {
                toast.error("error");
            }
        );
    };
    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>slot no.={slot.slot_id}</CardSubtitle>
                <CardText>vehicle no.={slot.veh_id}</CardText>
                <CardText>owner = {slot.owner}</CardText>
                <CardText>type = {slot.veh_type}</CardText>
                <CardText>duration = {slot.duration}</CardText>
                <Container className='text-center'> 
                    <Button color='danger' onClick={() => {deleteSlot(slot.slot_id);}}>leave</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Slot
