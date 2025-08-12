import './InputField.css'

export function InputField({id, 
                           labelValue, 
                           inputType, 
                           placeholder,
                           container="inputCont"}) {
   return(
    
     <div className={container}>

        <label htmlFor={id}>{labelValue}</label>
       <input type={inputType} 
              name={id} 
              id={id} 
              placeholder={placeholder} />
    
     </div>
   )
}