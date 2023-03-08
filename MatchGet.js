import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MatchGet.css';
 
function Matchget() {
 
    const [emps, setEmp] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/get')
            .then(response => {
                setEmp(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div>
            <h2>INDIAN PREMIER LEAGUE</h2>
            <h1></h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>match_loss</th>
                        <th>match_won</th>
                        <th>team_captain</th>
                        <th>team_name</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp => (
                        <tr key={emp.s_id}>
                            <td>{emp.s_id}</td>
                            <td>{emp.matchLoss}</td>
                            <td>{emp.matchWon}</td>
                            <td>{emp.teamCaptain}</td>
                            <td>{emp.teamName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
 
}
 
export default Matchget;