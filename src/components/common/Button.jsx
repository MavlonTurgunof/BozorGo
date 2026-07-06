function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-[48px] py-[16px] rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
