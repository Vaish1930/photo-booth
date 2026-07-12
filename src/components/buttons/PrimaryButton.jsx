const PrimaryButton = ({ text, style, onClick, hoverTransition = false }) => {
  return (
    <div>
      <button
        className={`min-w-[150px] h-[54px] bg-accent text-white text-base font-bold rounded-xl border-3 border-none shadow-btn-accented transition ${hoverTransition ? "hover:-translate-y-0.5 hover:shadow-lg" : ""} ${style ?? ""}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick?.();
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
