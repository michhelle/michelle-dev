const Button = ({ id, value, onClick }) => {
  return (
    <button class="calc-red" id={id} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
