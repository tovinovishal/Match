import React, { useState } from "react";
import axios from "axios";
import './MatchUpdate.css';
// import './EmpUpdate.css';

function MatchUpdate() {
  const [emp, setEmp] = useState({
    s_id: "",
    teamName: "",
    teamCaptain: "",
    matchWon: "",
    matchLoss: "",
  });

  const handleChange = (event) => {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/update`, emp).then((res) => {
      console.log(res.data);
      setEmp({ s_id: "", teamName: "", teamCaptain: "",matchWon: "",matchLoss: "" });
    });
  };

  return (
    <div>
      <h1>UPDATE</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="s_id" value={emp.s_id} onChange={handleChange} />
        </label>
        <label>
          Team_Name:
          <input type="text" name="teamName" value={emp.teamName} onChange={handleChange} />
        </label>
        <label>
          Team_Captain:
          <input type="text" name="teamCaptain" value={emp.teamCaptain} onChange={handleChange} />
        </label>
        <label>
          Match_Won:
          <input type="text" name="matchWon" value={emp.matchWon} onChange={handleChange} />
        </label>
        <label>
          Match_Loss:
          <input type="text" name="matchLoss" value={emp.matchLoss} onChange={handleChange} />
        </label>
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
}

export default MatchUpdate;