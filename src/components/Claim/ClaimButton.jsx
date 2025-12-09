import React, { useState } from 'react';

const ClaimButton = ({ item, currentUser }) => {
  const [claimStatus, setClaimStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClaim = async () => {
    setIsLoading(true);
    
    // Simulate API call to Supabase
    try {
      // This is where you'd call your Supabase API
      const claimData = {
        item_id: item.id,
        user_id: currentUser.id,
        user_email: currentUser.email,
        user_name: currentUser.name,
        claim_date: new Date().toISOString(),
        status: 'pending'
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, randomly approve/deny
      const status = Math.random() > 0.5 ? 'approved' : 'pending';
      setClaimStatus(status);
      
      console.log('Claim submitted:', claimData);
      
    } catch (error) {
      console.error('Claim failed:', error);
      setClaimStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  // If user already owns the item, don't show claim button
  if (item.user_id === currentUser.id) {
    return (
      <div className="claim-status" style={{ backgroundColor: '#d4edda', color: '#155724' }}>
        This is your item
      </div>
    );
  }

  // If already claimed
  if (claimStatus) {
    return (
      <div className={`claim-status ${claimStatus}`}>
        {claimStatus === 'approved' ? '✅ Claim Approved!' : 
         claimStatus === 'denied' ? '❌ Claim Denied' : 
         '⏳ Claim Pending Review'}
      </div>
    );
  }

  return (
    <button 
      className="claim-button"
      onClick={handleClaim}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : 'Claim Item'}
    </button>
  );
};

export default ClaimButton;