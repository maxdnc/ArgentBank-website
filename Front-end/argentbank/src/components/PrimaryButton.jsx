const buttonStyles = {
  default:
    'border-secondary bg-secondary p-[8px] text-[1.1rem] font-semibold text-white hover:bg-secondary/80',
  border:
    'border-2 border-b-green-800 border-l-secondary border-r-green-800 border-t-secondary bg-secondary p-[10px] text-sm font-bold text-white duration-150 ease-in-out hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800',
  borderSecondary:
    'border-2 border-b-green-800 border-l-secondary border-r-green-800 border-t-secondary bg-secondary p-[8px] text-[1.1rem] font-bold text-white duration-150 ease-in-out hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800 sm:px-6',
};

const PrimaryButton = ({
  label,
  type,
  onClick,
  className,
  buttonStyle = 'default',
}) => {
  const hoverClass = buttonStyles[buttonStyle] || buttonStyles['default'];
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${hoverClass} ${className}`}
    >
      {label}
    </button>
  );
};
export default PrimaryButton;
