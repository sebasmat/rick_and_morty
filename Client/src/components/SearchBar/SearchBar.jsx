import { useState } from "react";

export default function SearchBar(props) {
   const [id,setId] = useState([]);

   const handleChange = (event)=>{
      setId([event.target.value]);
   }
   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={()=>{
            props.onSearch.prop(id);
         }}>Agregar</button> 
      </div>
   );
}
