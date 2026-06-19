const Footer = () => {

  return (
    <footer className="w-full py-8 border-t border-slate-200 dark:border-slate-800/50 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm ">
        <p>Designed & Developed by Ataya Najla.</p>
        <p className="text-xs">
          Built with <span className="text-blue-500">React</span> &{" "}
          <span className="text-teal-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;