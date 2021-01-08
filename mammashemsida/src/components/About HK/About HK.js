import React from 'react';
import './About HK.css';

export const About = () => {
    return (
        <>
            <main>
                <header>
                    <div className = "wrapper">
                        <h1>Här kan du känna dig som hemma</h1>
                    </div>
                </header>
                <br/>
                <body>
                    <div className = "text">
                        <h2>Mångårig erfarenhet och personlig service</h2>
                            <p>Jag som driver HK Redovisning heter Helen Kjellberg.</p>
                            <br></br>
                            <p>Jag arbetar sedan många år som redovisningskonsult, och driver sedan 2013 en personlig redovisningsbyrå i Stenungsund. Majoriteten av mina kunder finns i Stenungsund med omnejd, men jag arbetar självklart även med kunder utanför kommunens gränser.</p>
                            <br></br>
                            <p>Oavsett om du driver ett enmansföretag eller ett multinationellt imperium är det alltid företagets ekonomi som är mitt fokus. Jag arbetar för att skapa långsiktiga, hållbara samarbeten och sätter stort värde på nära och personliga relationer.</p>
                    </div>
                </body>
                <footer>
                    <div className = 'contact'>
                        <h2>Välkommen att ta kontakt!</h2>
                            <p>Epost: <a href="mailto:helen@hkredovisning.se">helen@hkredovisning.se</a></p>
                            <p>Telefon: 070-239 00 22</p>
                    </div>
                </footer>
            </main>
        </>
    );
};