import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react/cjs/react.development";
import {  Button, Container, Form, FormGroup, Input  } from "reactstrap";
import slot_url from "../api/slotsapi";

const AddSlots = () => {

    useEffect (() => {
        document.title = "Add Slots";
    },[]);

    const [slot,setSlot] = useState({});

    const handForm = (e) => {
        console.log(slot);
        postDatatoServer(slot);
        e.preventDefault();
    };

    const postDatatoServer = (slot) => {
        axios.post(`${slot_url}/addslot`, slot).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("slot booked successfully");
                setSlot({slot_id:"",veh_id:"",owner:"",veh_type:"",duration:""});
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("error");
            }
        );
    };

    return(
        <>
    
        <Form onSubmit={handForm}>
            <FormGroup>
                <label for='user_id' >slot number</label>
                <Input type='text' placeholder='Enter here' name='slot_id' id='slot_id' onChange={(e) => {setSlot({ ...slot, slot_id: e.target.value})}}/>
            </FormGroup>
            <FormGroup>
                <label for='username' >Vehicle number</label>
                <Input type='text' placeholder='Enter vehicle number' name='veh_id' id='veh_id' onChange={(e) => {setSlot({ ...slot, veh_id: e.target.value})}}/>
            </FormGroup>
            <FormGroup>
                <label for='email' >vehicle owner</label>
                <Input type='text' placeholder='Enter name' name='owner' id='owner' onChange={(e) => {setSlot({ ...slot, owner: e.target.value})}}/>
            </FormGroup>
            <FormGroup>
                <label for='password' >Vehicle type</label>
                <Input type='text' placeholder='Enter vehicle type' name='veh_type' id='veh_type'onChange={(e) => {setSlot({ ...slot, veh_type: e.target.value})}}/>
            </FormGroup>
            <FormGroup>
                <label for='mobile' >Parking duration </label>
                <Input type='text' placeholder='Enter in hours' name='duration' id='duration' onChange={(e) => {setSlot({ ...slot, duration: e.target.value})}}/>
            </FormGroup>
            <Container className='text-center'>
                <Button type='submit' color='success'>Book</Button>
                <Button type="reset" onClick={(e) => { setSlot({});}}>Clear</Button>
            </Container>
        </Form>
        </>

    
    );
};

export default AddSlots;