import React from 'react';
import { getCurrentUser } from '@/services/auth-service';
// @ts-ignore
const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <h3>{currentUser.username} Profile</h3>

      <header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{' '}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
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
