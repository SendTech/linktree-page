import React from "react";

function DonationModal () {
    return(
        <div className="donationModal--fullWindows donationModal--center">
        <section className="donationModal__container">
            <h2 className="donationModal__title">Ayudanos con una donacion</h2>
            <p className="donationModal__description">
                Hola, solo vengo a mostrarte una de las muchas formas en las que puedes ayudarnos, solo donando 1 dolar (o mas), asi nosotros vamos a poder seguir haciendo mejor contenido
            </p>
            <a className="donationModal__button" href="https://www.buymeacoffee.com/SendTech">Vamos!!!</a>
        </section>
        </div>
    )
}

export { DonationModal };