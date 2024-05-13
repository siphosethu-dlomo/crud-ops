import { Button, Label, TextInput, Select } from "flowbite-react";
import { useState } from "react";

export function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('france')
  
  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('france')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title,
      date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput 
          id="title" 
          type="text" 
          placeholder="event name" 
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Date" />
        </div>
        <TextInput 
          id="date" 
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Location" />
        </div>
        <Select onChange={(e) => setLocation(e.target.value)} required>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
      </Select>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
