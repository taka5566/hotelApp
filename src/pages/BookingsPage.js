import { useEffect, } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import { useState } from "react";
import PlaceImg from "../PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";

export default function BookingsPage() {
    const [bookings,setBookings] = useState([]);
    useEffect(()=> {
        axios.get('/bookings').then(response => {
            setBookings(response.data);

        })
    })
    return (
        <div className="">
          <AccountNav/>
          <div className="">
              {bookings?.length > 0 && bookings.map (booking => (
                <div className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
                     <div className="w-48">
                     <PlaceImg place = {booking.place} />
                     </div>
                     <div className="py-3 pr-3 grow">
                     <h2 className='text-xl'>title</h2>
                     <div className="border-t border-gray-300 mt-2 py-2">
                     {format(new Date (booking.checkIn), 'yyyy-MM-dd')} - {format(new Date (booking.checkOut), 'yyyy-MM-dd')}                      

                     </div>
                     <div className="">
                        Number of nights: {differenceInCalendarDays((new Date(booking.checkOut), new Date(booking.checkIn)))}nights<br/>
                        Total price: ${booking.price}
                     </div>
                     </div>

                </div>
              ))}
          </div>
        </div>
    );
}