import React from 'react';
import './CustomerReviews.css';

export const CustomerReviews = () => {
    return (
        <>
            <header>
                <div className = "wrapper">
                    <h1>Omdömen från ett urval kunder</h1>
                </div>
            </header>
            <br></br>
            <body>
                <div className = "c4leads">
                <a rel = "noreferrer noopener" href = "https://c4leads.se/" target = "_blank"><img src = "https://hkredovisning.se/wp-content/uploads/2020/02/Omd%C3%B6me-logo-1-700x553.jpeg" width = "350" height = "277" alt = "c4leads"></img></a>
                    <p>“Jag kan varmt rekommendera Helene Kjellberg på HK Redovisning som nu hjälpt mig några år med bokföring och bokslut. Helen är lätt att kommunicera med och är en mycket duktig och prisvärd redovisningskonsult.”</p>
                    <br></br>
                    <p>Eva-Lena Ivarsson</p>
                    <p className = "länk"><a rel = "noreferrer noopener" href = "https://c4leads.se/" target = "_blank">Connect4 Leads Business Network AB</a></p>
                </div>
                <br></br>
                <br></br>
                <div className = "gardasnickeri">
                <a rel = "noreferrer noopener" href = "http://gardasnickeri.se" target = "_blank"><img src = "https://hkredovisning.se/wp-content/uploads/2020/02/Ga%CC%8ArdaSnickeri_logo_orange_mbakgrund-700x353.jpg" width = "350" height = "200" alt = "gardasnickeri"></img></a>
                    <p>“Helen hjälper mig att sova om nätterna, vetandes att allt i pappersväg är i ordning. Utan henne, inget företag!”</p>
                    <br></br>
                    <p>Victor Persvall</p>
                    <a rel = "noreferrer noopener" href = "http://gardasnickeri.se/" target = "_blank">Gårda Snickeri</a>
                </div>
                <br></br>
                <br></br>
                <div className = "idrottskliniken">
                <a rel = "noreferrer noopener" href = "http://ryggochidrottskliniken.com/" target = "_blank"><img src = "https://hkredovisning.se/wp-content/uploads/2020/03/Rygg-och-idrottsklinikiken-logo-700x247.png" width = "400" height = "150" alt = "rygg-idrottskliniken"></img></a>
                    <p>“Vi är väldigt nöjda med Helen som visat att ingen redovisningsfråga är för stor för att lösas på bästa sätt. Utan Helens hjälp hade vår ekonomi och verksamhet varit i kaos , hon ser till att vi kan fokusera på det vi är bra på. Vi rekommenderar starkt alla typer av ekonomisamarbete med Helen.”</p>
                    <br></br>
                    <p>Christian Sandström, VD</p>
                    <a rel = "noreferrer noopener" href = "https://ryggochidrottskliniken.com/" target = "_blank">Göteborgs Rygg & Idrottsklinik</a>
                </div>
                <br></br>
                <br></br>
                <div className = "elji">
                <a rel = "noreferrer noopener" href = "https://www.elji.se/" target = "_blank"><img src = "https://elji.se/sv/wp-content/uploads/2020/11/EljiLogo.jpg" width = "350" height = "150" alt = "elji"></img></a>
                    <p>“HK Redovisning är snabba och enkla att ha och göra med. Ordnar bokföring och löner utan att man behöver tänka på det.”</p>
                    <br></br>
                    <p>Lennart Jansson</p>
                    <a rel = "noreferrer noopener" href = "https://elji.se/" target = "_blank">Elji Elektronik</a>
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