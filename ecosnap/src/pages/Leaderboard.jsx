import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch leaderboard data from backend API
    axios.get('http://localhost:5000/api/leaderboard')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load leaderboard:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🌟 Leaderboard</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover responsive className="shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Challenges Accepted</th>
              <th>Points</th>
              <th>Eco Contributions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No entries yet.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.challenges.length}</td>
                  <td>{user.points}</td>
                  <td>{user.contributionSummary || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Leaderboard;

