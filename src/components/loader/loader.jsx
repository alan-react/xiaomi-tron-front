import React from 'react'
import style from "./loader.module.scss"

const BaseLoader = () => (
    <div className={style.content}>
       <div className={style.loading}>
           <p>Loading</p>
           <span></span>
       </div>
    </div>
)

export default BaseLoader
