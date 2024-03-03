import { useEffect, useState } from 'react';
import './style.css';

export const HomePage = () => {
  // useEffect(() => {alert("Ahoj Týno :)")}, [])
  const [dateTime, setDateTime] = useState('')
  const [timezone, setTimezone] = useState('Europe/Prague')

  useEffect( () => {
    const fetchDate = async () => {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();
      setDateTime(data.datetime)
      };
      fetchDate()
  }
 , [timezone])

  return (
    <div className="container">
      <header>
        <div className="" />
        <h1>Pražšký čas</h1>
      </header>
      <main>
        <p>
        Hodnota datetime: {dateTime}
        </p>
        <span>Vyberte zónu: </span>
        <select onChange={(e) => setTimezone(e.target.value)} value={timezone}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
