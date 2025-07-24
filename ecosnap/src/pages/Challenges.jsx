import React, { useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const initialChallenges = [
  {
    id: 1,
    title: 'Go Plastic-Free for a Day',
    description: 'Avoid using any plastic items for 24 hours.',
    progress: 60,
  },
  {
    id: 2,
    title: 'Plant a Tree',
    description: 'Plant a tree in your locality or support a tree-planting NGO.',
    progress: 20,
  },
  {
    id: 3,
    title: 'Walk or Cycle Instead of Driving',
    description: 'Avoid using your vehicle and walk or cycle for the entire day.',
    progress: 80,
  },
  {
    id: 4,
    title: 'Eco-Friendly Diet',
    description: 'Eat only plant-based meals for a whole day.',
    progress: 40,
  },
  {
    id: 5,
    title: 'Conserve Water',
    description: 'Use only 50% of your regular water consumption for a day.',
    progress: 30,
  },
  {
    id: 6,
    title: 'Energy-Free Hour',
    description: 'Switch off all electrical devices for one full hour.',
    progress: 50,
  },
  {
    id: 7,
    title: 'Carry a Cloth Bag',
    description: 'Say no to plastic bags and carry your own cloth bag while shopping.',
    progress: 70,
  },
  {
    id: 8,
    title: 'Segregate Waste',
    description: 'Separate dry and wet waste at home for an entire week.',
    progress: 90,
  },
];

const Challenges = () => {
  const [accepted, setAccepted] = useState([]);
  const navigate = useNavigate();

  const handleAccept = (id) => {
    if (!accepted.includes(id)) {
      setAccepted([...accepted, id]);
      navigate(`/accept-challenge/${id}`); // Navigate to AcceptChallenge.jsx
    }
  };

  const acceptedChallenges = initialChallenges.filter((ch) =>
    accepted.includes(ch.id)
  );
  const remainingChallenges = initialChallenges.filter(
    (ch) => !accepted.includes(ch.id)
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🌿 EcoSnap Challenges</h2>
      <p className="text-center text-muted mb-5">
        Accept challenges, track your green habits, and make a difference every day!
      </p>

      {/* Remaining Challenges */}
      <h4 className="mb-3">Available Challenges</h4>
      <div className="row">
        {remainingChallenges.map((challenge) => (
          <div className="col-md-6 col-lg-4 mb-4" key={challenge.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success">{challenge.title}</Card.Title>
                <Card.Text>{challenge.description}</Card.Text>
                <ProgressBar
                  now={challenge.progress}
                  label={`${challenge.progress}%`}
                  className="mb-3"
                />
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => handleAccept(challenge.id)}
                >
                  Accept Challenge
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Accepted Challenges Section */}
      {accepted.length > 0 && (
        <>
          <h4 className="mt-5 mb-3">🎉 Accepted Challenges</h4>
          <div className="row">
            {acceptedChallenges.map((challenge) => (
              <div className="col-md-6 col-lg-4 mb-4" key={challenge.id}>
                <Card className="h-100 shadow">
                  <Card.Body>
                    <Card.Title className="text-primary">{challenge.title}</Card.Title>
                    <Card.Text>{challenge.description}</Card.Text>
                    <ProgressBar
                      now={challenge.progress}
                      label={`${challenge.progress}%`}
                      className="mb-3"
                    />
                    <Button variant="outline-success" className="w-100" disabled>
                      ✅ Challenge Accepted
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Challenges;

