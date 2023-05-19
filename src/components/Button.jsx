const Button = ({ title, ...props }) => {
  return (
    <button
      type="submit"
      className="text-white mb-[1.75rem] pt-[0.5rem] pb-[0.5rem] h-[3rem] bg-[#e50914] rounded items-center ] font-bold"
    >
      {title}
    </button>
  );
};

export default Button;
