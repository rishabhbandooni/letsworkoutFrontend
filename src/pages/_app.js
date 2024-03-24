// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'; // Import global styles

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  // Example: Redirect to login if user is not authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    const isLoginPage = router.pathname === '/login';
    const isSignupPage = router.pathname === '/signup';

    if (!token && !isLoginPage && !isSignupPage) {
      router.push('/login');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
};

export default MyApp;
