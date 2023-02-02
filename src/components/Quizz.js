import React, { useState } from 'react';

const Quizz = ({ winners }) => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [bg, setBg] = useState('bg-gray-300');
  const [year, setYear] = useState(Object.keys(winners)[Math.floor(Math.random() * Object.keys(winners).length)]);
  const [winner, setWinner] = useState(winners[year]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (winners[year] === input) {
      setMessage('Victoire !');
      setBg('bg-green-300')
    } else {
      setMessage('Défaite.');
      setBg('bg-red-300')

    }
    setTimeout(() => {
      setInput('');
      setMessage('');
      setBg('bg-gray-300')
      setYear(Object.keys(winners)[Math.floor(Math.random() * Object.keys(winners).length)]);
    }, 1500);
  };

  return (
    <div className={`h-full w-full flex flex-col justify-center items-center ${bg}`}>
      <p>Année : {year}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Vérifier</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Quizz;
