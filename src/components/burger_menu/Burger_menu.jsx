import styles from "./Burger_menu.module.css"

export default function Burger({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="bg-lightfone w-[32px] h-[32px] flex flex-col
      justify-center items-center cursor-pointer rounded-lg relative"
    >
      {/* Верхняя линия */}
      <span
        className={`absolute block w-4 h-0.5 bg-b_fone rounded-[1px] transition-all duration-300 ${
          open ? "rotate-45" : "-translate-y-[4px]"
        }`}
      ></span>

      {/* Нижняя линия */}
      <span
        className={`absolute block w-4 h-0.5 bg-b_fone rounded-[1px] transition-all duration-300 ${
          open ? "-rotate-45" : "translate-y-[4px]"
        }`}
      ></span>
    </button>
  );
}