import React from 'react';
import ResumeSection from './components/ResumeSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827] text-gray-200 font-sans flex flex-col items-center pt-8 pb-10 px-4 overflow-x-hidden">
      <header className="w-full max-w-4xl mx-auto flex justify-end items-center mb-4 no-print">
         <div className="flex items-center gap-x-4">
        </div>
      </header>
      <main className="w-full max-w-7xl flex-grow flex flex-col items-center">
        <ResumeSection />
      </main>
      <footer className="text-center mt-24 text-gray-500 no-print">
        <p>&copy; {new Date().getFullYear()} Roy Hodge Jr. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default App;