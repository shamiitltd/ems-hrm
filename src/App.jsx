import './App.css'
import EventCalendar from './compoonents/calendar/EventCalendar'
import { SessionProvider } from './compoonents/loginsession/SessionHandler'

const App =() => {
 
  return ( 
    <>
    <EventCalendar/>
    <SessionProvider/>
    </>
  )
}

export default App;
