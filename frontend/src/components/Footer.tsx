interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`bg-white dark:bg-gray-800 py-6 ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Shortest Path Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 