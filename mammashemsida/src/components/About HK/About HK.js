import React from 'react';
import './About HK.css';
import mammapappa from '../images/mammapappa.jpg'

export const About = () => {
    return (
        <>
            <main>
                <header>
                    <div className = "header">
                        <h1 class="font-weight-light">Här kan du känna dig som hemma</h1>
                    </div>
                </header>
                <br/>
                <body class="font-weight-light">
                    <div className = "row">
                    <div className = "small-12 medium-7 large-7 column">
                        <h3>Mångårig erfarenhet och personlig service</h3>
                            <p className = "page-content"><strong>Jag som driver HK Redovisning heter Helen Kjellberg.</strong></p>
                            <br></br>
                            <p>Jag arbetar sedan många år som redovisningskonsult, och driver sedan 2013 en personlig redovisningsbyrå i Stenungsund. Majoriteten av mina kunder finns i Stenungsund med omnejd, men jag arbetar självklart även med kunder utanför kommunens gränser.</p>
                            <br></br>
                            <p>Oavsett om du driver ett enmansföretag eller ett multinationellt imperium är det alltid företagets ekonomi som är mitt fokus. Jag arbetar för att skapa långsiktiga, hållbara samarbeten och sätter stort värde på nära och personliga relationer.</p>
                    </div>
                    <div className = "small-12 medium-5 large-4 column">
                        <div className = "banner banner--contact has-footer">
                            <div className = "banner__content">
                                <h3 className = "heading-3 banner__title">Välkommen att ta kontakt!</h3>
                            </div>
                        <div className = "contact-card">
                            <div className = "contact-card__content">
                                <p>Epost: <a href="mailto:helen@hkredovisning.se" className = "contact-card__email js-track-link" data-track-category = "email">helen@hkredovisning.se</a></p>
                                <p>Telefon: <a href = "tel:0702390022" className = "contact-card__phone js-track-link" data-track-category = "phone">070-239 00 22</a></p>
                            </div>
                            <div className = "contact-card__image">
                                <img src = {mammapappa} alt = "Helen Kjellberg"/>
                            </div>
                        
                        </div>    
                        </div>
                    </div>
                    </div>
                </body>
            </main>
        </>
    );
};