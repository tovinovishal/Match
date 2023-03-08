import React, { useState } from 'react';
import axios from 'axios';
import './MatchDelete.css';

const MatchDel = () => {
  const [s_id, setId] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete/${s_id}`)
      .then(response => {
        alert('deleted successfully!');
        setId('');
         
      })
      .catch(error => {
        alert('Failed to delete');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>DELETE MATCH</h1>
      <form>
        <div>
          <label htmlFor="s_id">ID:</label>
          <input
            type="text"
            id="id"
            value={s_id}
            onChange={event => setId(event.target.value)}
          />
        </div>
         
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default MatchDel;