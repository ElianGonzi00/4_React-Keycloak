import React from 'react';
import keycloak from '../keycloak';

const Navbar = () => {
  const handleLogout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  return (
    <nav style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Proyecto de investigacion
      </div>
      
      {keycloak.authenticated && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '15px' }}>
            {keycloak.tokenParsed?.preferred_username || 'Usuario'}
          </span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;