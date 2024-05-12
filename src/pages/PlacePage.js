import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";

export default function PlacePage() {
    const {id} = useParams();
    const [place,setPlace] = useState(null);
    const[showAllphotos,setShowAllPhotos] = useState(false);
    useEffect(()=> {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);

        });
    }, [id]);

    if(!place) return '';

    if (showAllphotos) {
        return (
            <div className='absolute inset-0 bg-white min-h-screen'>
            <div className="p-8 grid gap-4">
               <div className="">
                  <h2 className="text-3xl">Photos of {place.title}</h2>
                  <button onClick={()=> setShowAllPhotos(false)}className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl">Close photos</button>
               </div>
              {place?.photos?.length > 0 && place.photos.map(photo => (
                <div>
                   <img src={"http://localhost:4000/uploads/"+photo}></img>
                </div>
               ))}
            </div>

            </div>
        );
    }
    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">
            <h1 className="text-3xl">{place.title}</h1>
            <a className='my-2 block font-semibold underline' target='_blank' href={'http://maps.google.com/?q='+place.address}>{place.address}</a>
            <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr]">
            <div>
             {place.photos?.[0] && (
                <div>
                <img className="aspect-square object-cover"src={'http://localhost:4000/uploads/'+place.photos[0]} alt=''/>
                </div>
             )}
                
            </div>
                <div className="grid">
                {place.photos?.[1] && (
                <img className="aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos[1]} alt=''/>
                )}
                </div>
            <div className="">
                {place.photos?.[2] && (
                <img className="aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos[2]} alt=''/>
             )}
            </div>
 

        </div>

        </div>
        <button onClick={() => setShowAllPhotos(true)}className="absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-gray-500">
        Show more photos
        </button>

        <div className="mt-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">

        <div className="">
            <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
            </div>
            Check-in: {place.checkIn}<br/>
            Check-out: {place.checkOut}<br/>
            Max number of guests: {place.maxGuests}
        </div>

        <div className="">
          <BookingWidget place={place}></BookingWidget>
             
        </div>
              <div className="">
                 <h2 className="font-semibold text-2xl">Extra Info</h2>
              </div>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-4">{place.extraInfo}</div>

        </div>

        
    );
}