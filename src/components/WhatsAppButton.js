import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {

  
  return (
    <a 
      href="https://wa.me/1323"
      className="fixed bottom-4  left-4 lg:left-8 lg:bottom-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
