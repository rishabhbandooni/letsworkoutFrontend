// components/Header.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [username, setUsername] = useState(localStorage.getItem('username'));

  const handleSignOut = () => {
    // Clear user data from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    // Redirect to the login page
    router.push('/login');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* Display username if available */}
            {username && <span>Welcome, {username}</span>}
          </li>
          {username && (
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
