import styles from "./CostCalculator.module.css"
import { useState } from "react"


export let CostCalculator = ({ price }) => {
  
  const [count, setCount] = useState(1.0)



  const MIN = 0.5 //Минимальное значение
  const STEP = 0.1 //Шаг

  // Уменьшить значение
  const dec = () => {
    setCount(prev => {
      const next = +(prev - STEP).toFixed(1)
      return Math.max(next, MIN)
    })
  }

  // Увеличить значение
  const inc = () => {
    setCount(prev => +(prev + STEP).toFixed(1))
  }
  //Обработка события onChange (Ввод)
  const onChangeIn = (e) => {
  const value = e.target.value;

  // Если пользователь стёр всё → оставлить пустую строку
  if (value === "") {
    setCount("");
    return;
  }

  const num = parseFloat(value);

  // Если ввели число → сохранить
  if (!isNaN(num)) {
    setCount(num);
  }
};
  //Обработчик события onBlur(При отводе мыши от пустого значения становится автоматически 0.5)
  const onBlurIn = () => {
  if (count === "") {
    setCount(0.5);
  }
};

  //Подсчет стоимости
  price = count=== "" ? 0 : +(price * count.toFixed(1)) //Условия для решения кофликта типа данных(число || строка)



  return (
    <div className="flex justify-between items-end w-full">
      <div className="flex items-center">
        <button
          className="bg-[#FFFFFF] text-[18px] text-[#888888] font-semibold w-[50px] h-[46px] flex items-center justify-center border border-[#888888] rounded-l-lg"
          onClick={dec}
        >
          -
        </button>

        <input
          type="number"
          value={count}
          onChange={onChangeIn}
          onBlur={onBlurIn}
          className="bg-[#E4E2DE] text-[18px] text-center font-semibold flex items-center justify-center w-[64px] h-[46px]"
        />

        <button
          className="bg-[#FFFFFF] text-[18px] text-[#888888] font-semibold w-[50px] h-[46px] flex items-center justify-center border border-[#888888] rounded-r-lg"
          onClick={inc}
        >
          +
        </button>
      </div>

      <p className="text-[18px] font-semibold">{price.toFixed(0)} ₽</p>
    </div>
  )
}
