import Link from "next/link";

const ChatbotCard = () => {
  const handleChatbotClick = () => {
    window.location.href = "";
  };

  return (
    <div className='max-w-xl mx-auto p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r rounded-lg shadow-lg'>
      <h2 className='text-3xl font-bold text-white mb-4'>
        Chat with our Chatbot!
      </h2>
      <p className='text-white mb-6'>
        Have questions? Chat with our friendly chatbot to get instant
        assistance.
      </p>
      <div className='flex justify-center'>
        <button
          onClick={handleChatbotClick}
          className='py-2 px-4 bg-white text-purple-800 rounded-full font-semibold transition duration-300 hover:bg-purple-800 hover:text-white'
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default ChatbotCard;
