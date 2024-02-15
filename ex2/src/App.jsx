import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pricing from "./component/pricing/Pricing";


function App() {

  let data = {
    title: "Prix et option à l'achat",
    description:
      "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
    plans: [
      {
        label: "Starter Package", 
        price: {
          buy: 29999.99,
          leasing: 299.99
        },
        advantages: [
          { text: "Assurance auto complémentaire", check: true},
          { text: "Première recharge offerte",  check: true},
          { text: "Assurance contre le vol", check: true},
          { text: "Service de rappel d'entretien", check: true},
          { text: "Nettoyage hebdomadaire", check: false },
          { text: "Service de diagnostic à distance", check: false},
          { text: "Service de remplissage du réservoir", check: false},
          { text: "Service de réparation à domicile", check: false},
          { text: "Entretien régulier", check: false},
          { text: "Recharge d'hydrogène illimité", check: false},
        ],
      },
      {
        label: "Premium Package",
        price: {
          buy: 35999.99,
          leasing: 359.99
        },
        advantages: [
          { text: "Assurance auto complémentaire", check: true},
          { text: "Première recharge offerte",  check: true},
          { text: "Assurance contre le vol", check: true},
          { text: "Service de rappel d'entretien", check: true},
          { text: "Nettoyage hebdomadaire", check: false },
          { text: "Service de diagnostic à distance", check: true},
          { text: "Service de remplissage du réservoir", check: true},
          { text: "Service de réparation à domicile", check: false},
          { text: "Entretien régulier", check: false},
          { text: "Recharge d'hydrogène illimité", check: false},
        ],
      },
      {
        label: "Prestige Package",
        price: {
          buy: 45999.99,
          leasing: 459.99
        },
        advantages: [
          { text: "Assurance auto complémentaire", check: true},
          { text: "Première recharge offerte",  check: true},
          { text: "Assurance contre le vol", check: true},
          { text: "Service de rappel d'entretien", check: true},
          { text: "Nettoyage hebdomadaire", check: true },
          { text: "Service de diagnostic à distance", check: true},
          { text: "Service de remplissage du réservoir", check: true},
          { text: "Service de réparation à domicile", check: true},
          { text: "Entretien régulier", check: true},
          { text: "Recharge d'hydrogène illimité", check: true},
        ],
      },
    ],
  };

  let cb_buy = function(){
    alert("merci pour votre achat")
  }

  return (
    <>
      <Pricing {...data}/>
    </>
  )
}

export default App