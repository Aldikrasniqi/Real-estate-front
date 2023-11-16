import React from 'react';
import { getCurrentUser } from '../services/auth-service';
// @ts-ignore
const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <h3>{currentUser.username}'s Profile</h3>

      <header>
    
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role: string, index: number) => (
              <li key={index}>{role}</li>
            ))}
        </ul>
      </header>
    </div>
  );
};

export default Profile;
