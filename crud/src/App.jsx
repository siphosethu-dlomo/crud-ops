import { useState } from 'react'
import { Card, Button } from "flowbite-react";
import Title from './components/Title';
import ModalComponent from './components/Modal';
import EventList from './components/EventList';


export function App() {
  const [showTextCard, setShowTextCard] = useState(true)
  const [texts, setTexts] = useState([
    {title: "Noteworthy technology acquisitions 2021", paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far...", id: 1},
    {title: "Noteworthy technology acquisitions 2022", paragraph: "Here are the biggest enterprise technology acquisitions of 2022 so far...", id: 2},
    {title: "Noteworthy technology acquisitions 2023", paragraph: "Here are the biggest enterprise technology acquisitions of 2023 so far...", id: 3}
  ])

  console.log(showTextCard);

  const handleClick = (id) => {
    // deleting cards, previous state
    setTexts((prevTexts) => {
      return prevTexts.filter((textCard) => {
        return id !== textCard.id
      })
    })
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
        {showTextCard && <EventList texts={texts} Card={Card} Button={Button} handleClick={handleClick} />}
        <ModalComponent />
      </div>

      
    </>
  );
}

export default App