import React from 'react'

import "uikit/dist/js/uikit.min.js";
import "../node_modules/uikit/dist/css/uikit.min.css";

function Card(props){

  return(
    <div className="Card">
    <div class="uk-text-center">
       <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
           <div className="crd"><span uk-icon="heart;ratio: 2"></span><h1 class="uk-position-center">{props.name}</h1>
           </div>
           <div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-flex uk-flex-center uk-flex-middle">
               <p class="uk-p" style={{color:"white"}}>We enable our clients to recognize uncharted possibilities and assist them towards deploying sustainable strategies.</p>
           </div>
       </div>
       <p class="uk-margin-small-top">Mission</p>
   </div>
</div>
  )
}
export default Card;
