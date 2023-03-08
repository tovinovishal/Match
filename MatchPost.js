import React, { useState } from 'react';

function MatchPost() {
  const [s_id, setId] = useState('');
  const [teamName, setName] = useState('');
  const [teamCaptain, setSalary] = useState('');
  const [matchWon, setBonus] = useState('');
  const [matchLoss, setGiven] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      s_id: s_id,
      teamName: teamName,
      teamCaptain: teamCaptain,
      matchWon : matchWon,
      matchLoss :matchLoss
    };

    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>MATCH POST</h1>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="s_id" name="s_id" value={s_id} onChange={event => setId(event.target.value)} />
      </div><br/>
      <div>
        <label htmlFor="name">TeamName:</label>
        <input type="text" id="teamName" name="teamName" value={teamName} onChange={event => setName(event.target.value)} />
      </div><br/>
      <div>
        <label htmlFor="stars">TeamCaptain:</label>
        <input type="text" id="teamCaptain" name="teamCaptain" value={teamCaptain} onChange={event => setSalary(event.target.value)} />
      </div><br/>
      <div>
        <label htmlFor="stars">MatchWon:</label>
        <input type="text" id="matchWon" name="matchWon" value={matchWon} onChange={event => setBonus(event.target.value)} />
      </div><br/>
      <div>
        <label htmlFor="stars">MatchLoss</label>
        <input type="text" id="matchLoss" name="matchLoss" value={matchLoss} onChange={event => setGiven(event.target.value)} />
      </div><br/>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default MatchPost;