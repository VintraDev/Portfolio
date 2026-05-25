import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset scroll on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
