import { Github, Twitter, Download } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold">DevSam</div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/08160885374" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
            Whatsapp          
            </a>
            
            <a
              href="https://github.com/DvSamM/" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a
              href="https://x.com/Sammie21__" // Replace with your Twitter profile
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            
            <a
              href="https://yourportfolio.com" // Replace with your portfolio URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            
          
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} DevSam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;