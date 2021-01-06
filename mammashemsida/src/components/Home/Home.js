import React from 'react';
import './Home.css';

export const Home = () => {
  return(  
    <>
     <header> 
      <div className = 'wrapper'>
        <h1>Vi kan redovisning</h1>   
      </div>
    </header>
    <body>
      <div className = 'info'>
       <h2>Personligt, proffessionellt och pålitligt</h2>
        <p>Tycker du att redovisning är krångligt och tar för mycket av din tid? Kanske tycker du rentav att redovisning är svårt? </p>
        <p>Det tycker inte vi, så låt oss hjälpa dig så att du istället kan fokusera på det <i>du</i> tycker är roligt, och det <i>du</i> är bäst på.</p>
     </div>
    <div className = 'companyExpl'>
      <h2>Vi förenklar din vardag</h2>
        <p>HK Redovisning är en personlig redovisningsbyrå med erfaren personal och stort engagemang.</p>
        <p>Varje uppdrag anpassas efter just dina behov, förutsättningar och önskemål. Vi värdesätter nära kundrelationer och långsiktiga samarbeten.</p>
        <p>Som kund hos oss kan du förlita dig på att vi håller oss uppdaterade när det gäller de senaste nyheterna, lagarna och reglerna.</p>
        <p>Oavsett om du driver ett enmansföretag eller har många anställda kan vi förenkla din vardag – genom att sköta hela, eller delar av företagets ekonomiadministration. Det finns också möjlighet att anlita oss som underkonsult/inhyrd ekonom.</p>
    </div>
    </body>
    <br></br>
    <footer>
      <div className = 'contact'>
        <h2>Välkommen att ta kontakt!</h2>
          <p>Epost: <a href="mailto:helen@hkredovisning.se">helen@hkredovisning.se</a></p>
          <p>Telefon: 070-239 00 22</p>
      </div>
    </footer>
  </>
  );  
};