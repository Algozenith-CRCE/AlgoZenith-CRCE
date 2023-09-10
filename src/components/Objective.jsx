import React from 'react';
import './Objective.css';
import Fade from 'react-reveal/Fade';

const ObjectiveComponent = () => {
  const objectives = [
    {
      title: 'Synergistic Collaboration',
      description:
        'Algozenith fosters interdisciplinary collaboration, uniting individuals from various domains to collectively share and generate innovative ideas, catalyzing progress and solutions across diverse fields.',
    },
    {
      title: 'Empowering Tech Enthusiasts',
      description:
        'Algozenith is dedicated to enhancing the technical capabilities of tech enthusiasts, emphasizing data structures, algorithms, and competitive programming, thereby empowering individuals for success in the tech industry.',
    },
    {
      title: 'Community Building through Events',
      description:
        'Algozenith\'s primary mission is to organize events centered around data structures, algorithms, and competitive programming, aiming to foster a vibrant community of tech enthusiasts while promoting excellence in these crucial domains.',
    },
  ];

  return (
    <div className="objective-container" id='objectives'>
        <h1 className="events-title" style={{'fontSize':'2rem','paddingBottom':'5px','fontWeight':500}}>Objectives</h1>
        <Fade bottom>
          <div className="cards-container">
              {objectives.map((objective, index) => (
                <div className="card" key={index}>
                  <h2 style={{'fontSize':'1.4rem'}}>{objective.title}</h2>
                  <p style={{'fontSize':'1.1rem'}}>{objective.description}</p>
                </div>
              ))}
          </div>
        </Fade>
    </div>
  );
};

export default ObjectiveComponent;
