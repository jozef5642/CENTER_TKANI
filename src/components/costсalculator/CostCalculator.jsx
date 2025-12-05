import styles from "./CostCalculator.module.css"
import { useState, useEffect } from "react"


export let CostCalculator = ({ price, onPriceChange }) => {
  const [count, setCount] = useState(1.0)

  const MIN = 0.5
  const STEP = 0.1

  const dec = () => {
    setCount(prev => {
      const next = +(prev - STEP).toFixed(1)
      return Math.max(next, MIN)
    })
  }

  const inc = () => {
    setCount(prev => +(prev + STEP).toFixed(1))
  }

  const onChangeIn = (e) => {
    const value = e.target.value

    if (value === "") {
      setCount("")
      onPriceChange(0)
      return
    }

    const num = parseFloat(value)

    if (!isNaN(num)) {
      setCount(num)
      onPriceChange(num * price)
    }
  }

  const onBlurIn = () => {
    if (count === "") {
      setCount(0.5)
      onPriceChange(0.5 * price)
    }
  }

  const finalPrice = count === "" ? 0 : price * count

  // каждый рендер отправляем новое значение родителю
  useEffect(() => {
    onPriceChange(finalPrice)
  }, [count])

  return (
    <div className="flex justify-between items-end w-full">
      <div className="flex items-center">

        <button
          className="bg-white text-[18px] text-[#888] font-semibold w-[50px] h-[46px] flex items-center justify-center border border-[#888] rounded-l-lg"
          onClick={dec}
        >
          -
        </button>

        <input
          type="number"
          value={count}
          onChange={onChangeIn}
          onBlur={onBlurIn}
          className="bg-[#E4E2DE] text-[18px] text-center font-semibold w-[64px] h-[46px]"
        />

        <button
          className="bg-white text-[18px] text-[#888] font-semibold w-[50px] h-[46px] flex items-center justify-center border border-[#888] rounded-r-lg"
          onClick={inc}
        >
          +
        </button>
      </div>


    </div>
  )
}
