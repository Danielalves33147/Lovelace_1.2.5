import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import exemplo from "../../assets/Example.svg";
import github from "../../assets/github.svg";
import link from "../../assets/link.svg";
import figma from "../../assets/figma.svg";

import "./index.css";

import Swal from 'sweetalert2';

export function Tool() {

    const navigate = useNavigate();

    function pratica(){
        Swal.fire({
            title: 'Iniciar Atividade?',
            text: "A partir daqui não terá mais volta!",
            icon: 'warning',
            iconColor: '#F21B3F',
            background: 'white',
            showCancelButton: true,
            confirmButtonColor: '#F21B3F',
            border: 'none',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iniciar'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/practice');
            }
          })
    }

  return (

            <body>
    <header id="lovelog">
        <h1 id>Lovelace</h1>
    </header>

    <section id="mainContent">
        <h1>Seja bem-vindo ao <span id="love">Lovelace</span></h1>
        <p>Uma ferramenta para que você possa praticar a sua leitura e melhorar ainda mais a forma com que você lida com palavras que você não conhece!</p>
    </section>
    
    <div className="tudo">
        <div className="direita">
            <section id="exampleSection">
                <h2>Como funciona?</h2>
                <p>Um contador para o tempo de leitura e uma pergunta para responder! Simples e prático.</p>
                <p>Basta ler o texto e dar as palavras chave, você pontuará a medida que acertar as palavras chave e levar menos tempo para ler!</p>
            </section>

            <section id="interactButtons">
                <a onClick= {pratica} id="startPractice">COMECE A PRATICAR</a>
                <a href="https://www.gutenberg.org/" target="_blank" id="seeBooks">E-BOOKS GRATUITOS EM INGLÊS</a>
            </section>
        
        </div>
        <div className="esquerda">
            <section id="exampleSection2">
            <img src={exemplo} alt="Exemplo de ATV" title="exemplo de atv"/>
            </section>
        </div>
    </div>

    <section id="socialButtons">
        <a href="https://github.com/devmarquinhos/Lovelace" target="_blank"><img src={github} alt="Github"/></a>
        <a href="https://linktr.ee/lovelacedevs"><img src={link} alt="Link"/></a>
        <a href="https://www.figma.com/file/Ej7N8rlsG69xa393ALhbnW/Voltaire?node-id=0%3A1&t=UJtTMR0yc0eKyPoZ-1" target="_blank"><img src={figma} alt="Figma"/></a>
    </section>

    <footer>
        <p>Desenvolvido por <span>Daniel de Santana</span>,<span> Marcos Emanuel </span> e <span> Melkysedeke Costa</span>.</p>
        <span className="divider"></span>
        <p>Orientado pela <span>Prof. Dr. Lenade Barreto</span>.</p>
    </footer>
</body>
 );
}
