
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">Ooops!!</p>
      <p className="text-lg text-gray-500 mt-2">THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.</p>
      <button
        onClick={goToHome}
        className="mt-8 px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
