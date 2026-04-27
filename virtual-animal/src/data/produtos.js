// src/data/produtos.js
import vasilhaImg from '../assets/vasilha.png'
import comedorinox from '../assets/comedouro-inox.png'
import bebedouro from '../assets/bebedouro.png'
import poteHermetico from '../assets/pote-hermetico.png'
import vasilhaAntiFormiga from '../assets/vasilha-anti-formiga.png'
import racao from '../assets/racao.png'

export const meusProdutos = [
    { id: 1, nome: "Vasilha de Plástico", preco: "12.99", img: vasilhaImg, descricao: "Vasilha resistente e atóxica." },
    { id: 2, nome: "Comedouro Inox", preco: "25.50", img: comedorinox, descricao: "Inox de alta qualidade que não enferruja." },
    { id: 3, nome: "Bebedouro Fonte", preco: "89.90", img: bebedouro, descricao: "Água sempre fresca para o seu pet." },
    { id: 4, nome: "Pote Hermético", preco: "19.00", img: poteHermetico, descricao: "Mantém a ração crocante por mais tempo." },
    { id: 5, nome: "Vasilha Anti-Formiga", preco: "15.00", img: vasilhaAntiFormiga, descricao: "Design inteligente que impede insetos." },
    { id: 6, nome: "Ração Premium", preco: "29.99", img: racao, descricao: "Nutrição completa para cães adultos." }
];