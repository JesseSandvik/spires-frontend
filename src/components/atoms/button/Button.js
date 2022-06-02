const Button = ({ children, className, id, onClick }) => (
  <button className={className} id={id} onClick={onClick}>
    {children}
  </button>
);

export default Button;
