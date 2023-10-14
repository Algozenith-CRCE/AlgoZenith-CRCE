import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import './Teammembers.css';
import aaron from '../assets/aaron.png';
import alroy from '../assets/alroy.jpg';
import shruti from '../assets/shruti.png';
import rudalph from '../assets/rudalph.png';
import nathan from '../assets/nathan.png';
import punit from '../assets/punit.png';


const TeamMembersComponent = () => {
  const teamMembers = [
    {
      name: 'Rudalph Gonsalves',
      position: 'Lead',
      photoUrl: rudalph,
      instagramLink: 'https://instagram.com/rudalphgonsalves?igshid=MzRlODBiNWFlZA==',
      linkedinLink: 'https://www.linkedin.com/in/rudalph-gonsalves-219463257',
    },
    {
      name: 'Shruti Patil',
      position: 'Co-Lead',
      photoUrl: shruti,
      instagramLink: 'https://instagram.com/shrutipatil__20?igshid=MzNlNGNkZWQ4Mg==',
      linkedinLink: 'https://www.linkedin.com/in/shruti-patil-2055b6231',
    },
    {
      name: 'Punit Giri',
      position: 'Management Lead',
      photoUrl: punit,
      instagramLink: 'https://instagram.com/punitirl?igshid=MzRlODBiNWFlZA==',
      linkedinLink: 'https://www.linkedin.com/in/punit-giri',
    },
    {
      name: 'Aaron Pereira',
      position: 'Event Co-ordinator',
      photoUrl: aaron,
      instagramLink: 'https://instagram.com/aaron_pereira__?igshid=OGQ5ZDc2ODk2ZA==',
      linkedinLink: 'https://www.linkedin.com/in/aaron-pereira-878608246',
    },
    {
      name: 'Alroy Pereira',
      position: 'Graphics Lead',
      photoUrl: alroy,
      instagramLink: 'https://instagram.com/alroy_pereira?igshid=MzRlODBiNWFlZA==',
      linkedinLink: 'https://www.linkedin.com/in/alroy-pereira-2b3631248',
    },
    {
      name: 'Nathan Dias',
      position: 'Media & PR Lead',
      photoUrl: nathan,
      instagramLink: 'https://instagram.com/nathan_dias_11?igshid=MzRlODBiNWFlZA==',
      linkedinLink: 'https://www.linkedin.com/in/nathan1107',
    },
  ];

  return (
    <div className="team-members-container" id="team">
      
        <h1 className="events-title" style={{'textAlign':'center'}}><strong>TEAM MEMBERS</strong></h1>
        <div className="cards-container">
          {teamMembers.map((member, index) => (
            <Zoom>
              <div className="card" key={index}>
                <div className='card-circle'>
                  <div className="member-photo">
                    <img src={member.photoUrl} alt='member' />
                  </div>
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                  <div className="social-icons">
                    <a href={member.instagramLink} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="icon instagram-icon" />
                    </a>
                    <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon linkedin-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      
    </div>
  );
};

export default TeamMembersComponent;
