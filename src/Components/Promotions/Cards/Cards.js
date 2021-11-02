import React from "react";
import './Cards.css'

const PromotionCards = ({promotion}) =>(

  <div className="promotion-cards">
    
    <div className="promotion-cards__header">
        <img src={promotion.imageUrl} alt={promotion.title} className="promotion-cards__img"/>
        <div className="promotion-cards__header-a">
          <h1 className="promotion-cards__title">{promotion.title}</h1>
          <span className="promotion-cards__price">R$ {promotion.price}</span>         
          <footer className="promotion-cards__footer">
                {promotion.comments.length > 0 && (
                  <div className="promotion-cards__coment">"{promotion.comments[0].comment}"</div>
                )}
                <div className="promotion-cards__coment-count">
                  {promotion.comments.length}{' '}
                  {promotion.comments.length > 1 ? 'Comentários': 'Comentário'}  
                </div>
                <div>  
                  <a 
                    href={promotion.url} 
                    target="_blank"
                    rel="nopopener noreferrer"
                    className="promotion-cards__link">
                      IR PARA O SITE
                  </a>  
                </div>
            </footer>
           
          
        </div>
    </div>
    
  </div>

);

export default PromotionCards;