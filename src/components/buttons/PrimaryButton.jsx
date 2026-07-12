const PrimaryButton = ({
  text = "Click me",
  type = "normal", // "normal" | "accent"
  hoverTransition = false,
  onClick,
  style,
}) => {
  return (
    <div>
      <button
        className={`min-w-[150px] h-[54px] text-base font-bold  transition ${hoverTransition ? "hover:-translate-y-0.5 hover:shadow-lg" : ""} rounded-xl ${type === "accent" ? "bg-accent text-white border-3 border-none shadow-btn-accented" : "[border:var(--border-btn-normal)]"} ${style ?? ""}`}
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
