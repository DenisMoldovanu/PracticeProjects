import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
  const events = useLoaderData();
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
      
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  if(events.isError){
    return <p>{events.message}</p>
  }
  return (
    <>
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
      { <EventsList events={events} />}
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return {isError:true, message: 'Could not fetch events'};
    throw {
      message: 'could not fetch',
    }
  } else {
    const resData = await response.json();
    // console.log(resData);
    const res = new Response();
    console.log(res);
    return resData.events;

  }
}