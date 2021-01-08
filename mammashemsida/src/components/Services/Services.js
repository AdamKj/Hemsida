import React from 'react';
import './Services.css';

export const Services = () => {
    return (
    <>
    <main>
        <header>
            <div className = "wrapper">
                <h1>Kvalificerade ekonomi- och redovisningstjänster</h1>
            </div>
        </header>
        <body>
            <div className = "text">
                <h2>Det här kan jag erbjuda</h2>
                    <p>Att leja bort bokföringen inte bara underlättar vardagen, det frigör även värdefull tid för annat som också måste göras.</p>
                    <p>Då kan du ägna dig åt det du gör bäst, medan jag hjälper dig med det jag är bäst på.</p>
                    <p>Det är faktiskt inte svårare än så!</p>
            </div>
            <div className = "text">
                <h4>Årsbokslut</h4>
                    <p>Att göra årsbokslut innebär att man avslutar den löpande bokföringen för aktuellt räkenskapsår.</p>
                    <p>Alla transaktioner som gjorts under året sammanställs och redovisas i form av en balans- och resultaträkning.</p>
            </div>
            <div className = "text">
                <h4>Årsredovisning</h4>
                    <p>En årsredovisning ska bestå av en resultaträkning, en balansräkning, så kallade noter samt en förvaltningsberättelse.</p>
                    <p>Dessa delar visar bland annat företagets ekonomiska ställning, såsom intäkter, kostnader och skulder.</p>
            </div>
            <div className = "text">
                <h4>Löpande bokföring</h4>
                     <p>I den löpande bokföringen ska alla affärshändelser, såsom kontanta in- och utbetalningar, registreras med en jämn regelbundenhet.</p>
                    <p>Den löpande bokföringen är något många lejer bort då det är relativt tidskrävande.</p>
            </div>
            <div className = "text">
                <h4>Kundreskontra</h4>
                    <p>Genom en kundreskontra får man en översikt över företagets transaktioner.</p>
                    <p>Kundreskontra ger information om företagets kunder samt vilka fakturor som blivit betalda och inte.</p>
            </div>
            <div className = "text">
                <h4>Leverantörsreskontra</h4>
                    <p>Leverantörsreskontra innehåller information om vilka fakturor som har kommit in samt vilka som har betalats.</p>
                    <p>Leverantörsreskontra ger information om företagets leverantörer.</p>
            </div>
            <div className = "text">
                <h4>Momsredovisning</h4>
                    <p>Moms kan redovisas genom bokslutsmetoden och/eller faktureringsmetoden.</p>
                    <p>Bokslutsmetoden används för företag som omsätter mindre än 3 miljoner per år, medan faktureringsmetoden används för övriga företag.</p>
            </div>
            <div className = "text">
                <h4>Skattedeklaration</h4>
                    <p>Skattedeklarationen är en sammanställd redovisning av moms, avdragen skatt och arbetsgivaravgifter som ska göras varje månad.</p>
                    <p>Skattedeklarationen består av två delar – redovisning av arbetsgivaravgifter och avdragna skatter samt redovisning av utgående och ingående moms.</p>
            </div>
            <div className = "text">
                <h4>Inkomstdeklaration</h4>
                    <p>En inkomstdeklaration ska innehålla uppgifter om inkomster från förvärvsarbete, eventuell näringsverksamhet samt övrigt kapital.</p>
                    <p>Skattebetalningsskyldiga personer ska skicka in en deklaration varje år. Den som bedriver näringsverksamhet ska bifoga en särskild blankett.</p>
            </div>
            <div className = "text">
                <h4>Löneadministration</h4>
                    <p>Löneadministration handlar i stora drag om att betala ut rätt lön till rätt person.</p>
                    <p>Det man bland annat måste ta hänsyn till är anställningsform, arbetstid, flextid, semesterlön, pensionsgrundande lönetillägg, sjuklön med mera.</p>
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
     </main>
    </>
    );
};