import React, { useState } from 'react';

// The Text component as requested, adapted for a single-file structure.
const Text = ({ children }) => {
  return <p>{children}</p>;
};

// The SignIn component as requested.
const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Sign In</h2>
      <p className="text-slate-600">The sign-in view</p>
    </div>
  );
};

// A placeholder for the Repositories view.
const Repositories = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Repositories</h2>
      <p className="text-slate-600">This is the repositories view.</p>
    </div>
  );
};

// The main App component that handles routing and the app bar.
const App = () => {
  const [currentPage, setCurrentPage] = useState('repositories');

  // A simple router-like function to render the correct component.
  const renderView = () => {
    switch (currentPage) {
      case 'repositories':
        return <Repositories />;
      case 'signIn':
        return <SignIn />;
      default:
        return <Repositories />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 flex flex-col items-center">
      {/* Tailwind CSS CDN script */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* App Bar */}
      <nav className="w-full bg-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* The container below enables horizontal scrolling on overflow */}
            <div className="flex-grow flex-shrink-0 min-w-0 overflow-x-auto whitespace-nowrap scroll-smooth">
              <div className="flex items-center space-x-4 text-white font-medium">
                {/* Main tabs */}
                <a
                  href="#"
                  onClick={() => setCurrentPage('repositories')}
                  className={`py-2 px-3 rounded-md text-sm transition-colors duration-200
                    ${currentPage === 'repositories' ? 'bg-slate-700 text-white' : 'hover:bg-slate-700 hover:text-white'}`}>
                  Repositories
                </a>
                <a
                  href="#"
                  onClick={() => setCurrentPage('signIn')}
                  className={`py-2 px-3 rounded-md text-sm transition-colors duration-200
                    ${currentPage === 'signIn' ? 'bg-slate-700 text-white' : 'hover:bg-slate-700 hover:text-white'}`}>
                  Sign in
                </a>

                {/* Additional tabs to demonstrate horizontal scrolling */}
                <a href="#" className="py-2 px-3 rounded-md text-sm transition-colors duration-200 hover:bg-slate-700 hover:text-white">
                  Tab 3
                </a>
                <a href="#" className="py-2 px-3 rounded-md text-sm transition-colors duration-200 hover:bg-slate-700 hover:text-white">
                  Tab 4
                </a>
                <a href="#" className="py-2 px-3 rounded-md text-sm transition-colors duration-200 hover:bg-slate-700 hover:text-white">
                  Tab 5
                </a>
                <a href="#" className="py-2 px-3 rounded-md text-sm transition-colors duration-200 hover:bg-slate-700 hover:text-white">
                  Tab 6
                </a>
                <a href="#" className="py-2 px-3 rounded-md text-sm transition-colors duration-200 hover:bg-slate-700 hover:text-white">
                  Tab 7
                </a>
                <a href="#" className="py-2 px-3 rounded-md text-sm transition-colors duration-200 hover:bg-slate-700 hover:text-white">
                  Tab 8
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-4 w-full">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
