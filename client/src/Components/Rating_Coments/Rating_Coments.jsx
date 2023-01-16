import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { putCalificationRating } from "../../Redux/action"
import s from "./Rating_Coments.module.css"

function Rating_Coments({ id }) {
  const dispatch = useDispatch()

  const [rating, setRating] = useState({ _id: id })

  const handleChangeRating = (e) => {
    setRating({
      ...rating,
      calification: e.target.value,

    })
    console.log(rating)
  }
  const handleComents = (e) => {
    setRating({
      ...rating,
      coments: e.target.value,
    })
    console.log(rating)
  }
  const handleClick = (e) => {
    dispatch(putCalificationRating(rating))
    console.log(rating, id)
  }
  return (
    <div className={s.div}>
      <h3 className={s.h3}>Califica el Producto</h3>
      <div className={s.div1}>
        <label className={s.label}>
          <input type="checkbox" value="1" onChange={handleChangeRating} />
          <p className={s.p}>1</p>
        </label>
        <label className={s.label}>
          <input type="checkbox" value="2" onChange={handleChangeRating} />
          <p className={s.p}>2</p>
        </label>
        <label className={s.label}>
          <input type="checkbox" value="3" onChange={handleChangeRating} />
          <p className={s.p}>3</p>
        </label>
        <label className={s.label}>
          <input type="checkbox" value="4" onChange={handleChangeRating} />
          <p className={s.p}>4</p>
        </label>
        <label className={s.label}>
          <input type="checkbox" value="5" onChange={handleChangeRating} />
          <p className={s.p}>5</p>
        </label>

        <label className={s.label}>
          <textarea onChange={handleComents}></textarea>
        </label>
        <button className={`btn btn-primary ${s.botton}`} onClick={handleClick}>Puntuar</button>
      </div>
    </div>
  )
}

export default Rating_Coments