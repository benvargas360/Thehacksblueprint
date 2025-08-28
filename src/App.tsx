import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold text-center pt-20">The Hacks Blueprint</h1>
      <div className="flex justify-center mt-6">
        <img
          src="https://unavatar.io/instagram/thehacksblueprint"
          alt="Foto de perfil de Instagram"
          className="h-24 w-24 rounded-full ring-4 ring-emerald-200 object-cover"
        />
      </div>
      <p className="text-center mt-4 text-gray-700">Wellness, hábitos y biohacking para vivir mejor</p>
    </div>
  );
}
