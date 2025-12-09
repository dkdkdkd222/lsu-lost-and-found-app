// src/components/ClaimTest.jsx 
import React from 'react';
import ClaimButton from './Claim/ClaimButton';

const ClaimTest = () => {
  const mockItem = {
    id: '1',
    title: 'Test Item',
    description: 'Test description'
  };

  const mockUser = {
    id: 'user1',
    email: 'test@test.com'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Claim Test</h1>
      <ClaimButton item={mockItem} currentUser={mockUser} />
    </div>
  );
};

export default ClaimTest;