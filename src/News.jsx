import React from 'react';

export default function News() {
    return (
        
    <div className="news-container">
        <article className="news-text">
            <h4 className="news-headline">PORSCHE DOES IT AGAIN</h4>

            <p className="news-summary">Porsche’s new 911 Rennsport, revealed at the Rennsport Reunion, features a 518-hp flat-six engine and advanced aerodynamics. This track-focused marvel blends high performance with
             a nod to Porsche’s racing heritage, offering an exhilarating and precision-engineered driving experience.   
            </p>

    
        <div className="read-container">
            <a href="https://newsroom.porsche.com/en_US/2023/motorsport/introducing-the-new-Porsche-911--GT3-R-rennsport-33947.html" className="read-link" target="_blank">
                <label>READ MORE</label>
                <img src="src/assets/images/play.png" />
            </a>
        </div>

        </article>

        <div className="image-section">
            <img src="src/assets/images/rennsport.jpg" alt="Porsche Rennsport" />
        </div>
    </div>
    );
}