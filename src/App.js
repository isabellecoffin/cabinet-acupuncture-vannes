import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 grid place-items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="rounded-2xl shadow-lg p-8 space-y-6 bg-white">
          <h1 className="text-3xl font-bold text-center">
            Cabinet des Docteurs BEAUFRETON, LANOS, COFFIN
          </h1>
          <p className="text-center text-lg">
            <strong>Docteur Isabelle Coffin</strong>, Acupuncture et ostéopathie médicale
          </p>

          <div className="text-center space-y-2">
            <p className="font-medium">Cabinet-acupuncture-vannes</p>
            <p>Parc d’activité de Laroiseau</p>
            <p>10 rue Ella Maillart</p>
            <p>56000 Vannes</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">PRÉSENTATION</h2>
            <p>Docteur en Médecine Manuelle Ostéopathie, je suis diplômée de la faculté de Caen en 2013.</p>
            <p>Depuis septembre 2016, je suis également enseignante vacataire à la faculté de Caen.</p>
            <p>En 2018, j’obtiens le DIU Initiation Médicale à l’Acupuncture à la faculté de Rouen, puis en 2020 la Capacité d’Acupuncture Médicale de la faculté de médecine de Nantes. Je suis également enseignante vacataire à la faculté de Rouen.</p>
            <p>Ma devise est celle de Louis Pasteur : « guérir parfois, soulager souvent, écouter toujours ».</p>
            <p>Ma formation de médecin permet une approche globale et bienveillante.</p>
            <p>Soyez les bienvenues.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Informations</h2>
            <p>Consultations dans le respect du cadre déontologique et des données acquises de la science. Activité en secteur 3 non conventionnée ; prise en charge uniquement par votre mutuelle, en fonction de votre niveau de couverture.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Prise de rendez-vous</h2>
            <p>Les consultations se font exclusivement sur rendez-vous.</p>
            <a href="https://www.doctolib.fr/medecin-generaliste/le-neubourg/isabelle-coffin" target="_blank" rel="noopener noreferrer">
              <button className="w-full rounded-xl bg-blue-500 text-white py-2 px-4">Prendre rendez-vous sur Doctolib</button>
            </a>
          </div>

          <footer className="text-center text-sm text-gray-500 pt-6 border-t">
            <p>© Cabinet-acupuncture-vannes</p>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}
