const Switch = ({ darkMode, setDarkMode }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />

      <div
        className="w-14 h-7 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-gray-600 peer-checked:to-slate-800 transition-all duration-500 

        after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:flex after:items-center after:justify-center after:transition-all after:duration-500 
 
        peer-checked:after:translate-x-6 

        
        peer-checked:after:content-['🌙'] 
        after:shadow-sm after:text-xs"
      />
    </label>
  );
};

export default Switch;
