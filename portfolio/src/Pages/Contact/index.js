import React from "react";
import "./styles.css";
import MenuVertical from "../../Components/Menu";


function Contact() {
    return (
        <div className="envolto">
            <MenuVertical />
            <header className="header-contact">
                <h2>Hipster Ipsum</h2>
                <p></p>
            </header>

            <section className="grid-section"> 
                <h1 className="Título">Projetos realizados</h1>

                <iframe className="pinterest-prato"
                        src="https://assets.pinterest.com/ext/embed.html?id=769974867535330701"
                        height="220"
                        width="236"
                        frameBorder="0"
                        scrolling="no"
                        
                    ></iframe>
                    <iframe className = "pinterest-peixe"
                        src="https://assets.pinterest.com/ext/embed.html?id=852587773197050796"
                        height="270"
                        width="236"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                    
                    <iframe className="pinterest"
                        src="https://assets.pinterest.com/ext/embed.html?id=769974867535330768"
                        height="341"
                        width="236"
                        frameBorder="none"
                        scrolling="no"
                    ></iframe>
                
            </section>
        </div>
    );
}

export default Contact;
