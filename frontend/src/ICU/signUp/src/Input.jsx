import { forwardRef } from "react"

const Input = forwardRef(function({text,...prop},ref){

    return(
        <div className="control">
            <label htmlFor={prop.id}>{text}</label>
            <input {...prop} ref={ref} />
        </div>
    )
})

export default Input