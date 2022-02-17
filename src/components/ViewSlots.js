import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import slot_url from '../api/slotsapi';
import UserSlot from './UserSlot';



const ViewSlots = () =>{

    useEffect (() => {
        document.title = "Slots view";
    },[]);

    const getAllSlotsfromServer = () => {
        axios.get(`${slot_url}/findall`).then(
            (response) => {
                console.log(response.data);
                toast.success("slots loaded");
                setSlot(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("server is down");
            }

        );
    };

    useEffect(() => {
        getAllSlotsfromServer();
    }, []);

    const [ slot, setSlot ] = useState([]);

    const updateSlot = (slot_id) => {
        setSlot(slot.filter((c) => c.slot_id != slot_id ));
    };

    return (

        <div>
            <h1>booked</h1>

            {
                slot.length > 0 ? slot.map((item) => <UserSlot key={item.slot_id} slot={item} update={updateSlot} />)
            : "all alot available"}
        </div>
    );
};
export default ViewSlots;