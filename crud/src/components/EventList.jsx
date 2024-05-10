import React from 'react'

export default function EventList({texts, Card, Button, handleClick}) {
  return (
    <div>
      {texts.map((text) => (
          <Card key={text.id} className="max-w-sm my-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {text.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {text.paragraph}
          </p>
          <Button color="failure" onClick={() => {handleClick(text.id)}}>
            Delete
          </Button>
        </Card>
        ))}
    </div>
  )
}
