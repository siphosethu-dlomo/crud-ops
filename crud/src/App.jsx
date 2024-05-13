import { useState } from 'react'
import { Card, Button } from "flowbite-react";
import Title from './components/Title';
import ModalComponent from './components/Modal';
import EventList from './components/EventList';


export function App() {
  const [showTextCard, setShowTextCard] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (events) => {
    setEvents((preEvents) => {
      return [...preEvents, events]
    })
  }

  const handleClick = (id) => {
    // deleting cards, previous state
    setEvents((prevEvents) => {
      return prevEvents.filter((textCard) => {
        return id !== textCard.id
      })
    })
  }

  // video - #45 same brach, no commits yet

  const handleClose = () => {
    setOpenModal(false)
  }

  const subtitle = "All your events here"

  return (
    <>
      <Title title="Get Events" subtitle={subtitle} />
      
      <div className='flex mt-5 justify-center'>
        {showTextCard && (<Button onClick={() => setShowTextCard(false)}>hide cards</Button>)}
        {!showTextCard && (<Button onClick={() => setShowTextCard(true)}>show cards</Button>)}
      </div>
      <div className='grid place-items-center h-screen'>
        <ModalComponent addEvent={addEvent} handleClose={handleClose}/>
        {showTextCard && <EventList events={events} Card={Card} Button={Button} handleClick={handleClick} />}
      </div>
    </>
  );
}

export default App