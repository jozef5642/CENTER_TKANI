import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main"; // путь к твоему контексту
import { TkanItem } from "../tkanitem/TkanItem"

export let Tkanlist = observer(() => {
  const { tkans } = useContext(Context);
  const [visibleCount, setVisibleCount] = useState(4);

  // хук для отслеживания ширины окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // мобильные устройства (sm)
        setVisibleCount(2);
      }

      else if (window.innerWidth < 940) { // планшет/ (md)
        setVisibleCount(3);
      }
      else {
        setVisibleCount(4); // десктоп
      }
    };

    handleResize(); // установить сразу при монтировании
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // берём только нужное количество элементов
  const itemsToShow = tkans.tkans.slice(0, visibleCount);

  return (
    <div className="flex gap-4 mx-2">
      {itemsToShow.map((tkan) => (
        <TkanItem key={tkan.id} tkan={tkan} />
      ))}
    </div>
  );
});
