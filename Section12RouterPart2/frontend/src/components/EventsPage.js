import { Link } from "react-router-dom";
const Events = [
	{id:'p1', title: 'Event 1'},
	{id:'p2', title: 'Event 2'},
	{id:'p3', title: 'Event 3'},
]

function EventsPage() {

	return (
		<>
		<h1>This is Events Page</h1>
		<ul>
			{Events.map(event => <li key={event.id}><Link to ={`/events/${event.id}`} >{event.title}</Link></li>)}
		</ul>
		</>
	);
	
}

export default EventsPage;