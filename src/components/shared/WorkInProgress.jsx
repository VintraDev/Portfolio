import { useEffect, useState } from 'react';

function WorkInProgress() {
  const [text, setText] = useState('Em construção 🛠️');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => {
        if (prev.endsWith('. . .')) return 'Em construção 🛠️';
        return prev + ' .';
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-left text-5xl text-gray-200">{text}</p>
    </div>
  );
}

export default WorkInProgress;
