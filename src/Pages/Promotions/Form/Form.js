import React from "react";
import { useParams } from "react-router";

const PagePromotionForm = () =>{
  const  {id} = useParams();
  
  return (
      <div>
        FORM
         {id && <div> id: {id}</div>}
      </div>
  );
};

export default PagePromotionForm;