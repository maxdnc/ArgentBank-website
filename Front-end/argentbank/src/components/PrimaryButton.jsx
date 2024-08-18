const hoverEffects = {
  border:
    'hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800',
  background: 'hover:bg-secondary/80',
};

const PrimaryButton = ({
  label,
  type,
  onClick,
  className,
  hoverEffect = 'background',
}) => {
  const hoverClass = hoverEffects[hoverEffect] || hoverEffects['background'];
  return (
    <button
      onClick={onClick}
      type={type}
      className={` border-secondary bg-secondary p-[8px] text-[1.1rem] font-semibold text-white ${hoverClass} ${className}`}
    >
      {label}
    </button>
  );
};
export default PrimaryButton;
