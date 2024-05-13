import React from 'react'

export default function EventList({events, Card, Button, handleClick}) {
  return (
    <div>
      {events.map((event) => (
          <Card key={event.id} className="max-w-sm my-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {event.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {event.location}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {event.date}
          </p>
          <Button color="failure" onClick={() => {handleClick(event.id)}}>
            Delete
          </Button>
        </Card>
        ))}
    </div>
  )
}
