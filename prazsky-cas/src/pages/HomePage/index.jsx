import { useEffect, useState } from 'react';
import './style.css';

export const HomePage = () => {
  // useEffect(() => {alert("Ahoj Týno :)")}, [])
  const [dateTime, setDateTime] = useState('')

  useEffect( () => {
    const fetchDate = async () => {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
      const data = await response.json();
      setDateTime(data.datetime)
      };
      fetchDate()
  }
 , [])

  return (
    <div className="container">
      <header>
        <div className="" />
        <h1>Pražšký čas</h1>
      </header>
      <main>
        <p>
        {dateTime}
        </p>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
