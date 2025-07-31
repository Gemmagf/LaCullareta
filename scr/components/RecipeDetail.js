import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Utensils, ListOrdered, Scale, ExternalLink, Users } from 'lucide-react';
import { convertUnits } from '../utils/unitConverter';

const RecipeDetail = ({ recipe, onClose }) => {
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric', 'imperial', 'us', 'cucharadas', 'tazas'
  const [servings, setServings] = useState(recipe.servings);

  const handleUnitChange = (e) => {
    setUnitSystem(e.target.value);
  };

  const handleServingsChange = (e) => {
    const newServings = parseInt(e.target.value, 10);
    if (!isNaN(newServings) && newServings > 0) {
      setServings(newServings);
    } else if (e.target.value === '') {
      setServings(''); // Allow empty input temporarily
    }
  };

  const calculateAdjustedQuantity = (originalQuantity) => {
    if (servings === '' || recipe.servings === 0) return originalQuantity;
    return (originalQuantity / recipe.servings) * servings;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        layoutId={`recipe-card-${recipe.id}`}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/2">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm font-medium mb-4">
              <div className="flex items-center gap-1">
                <Utensils className="w-4 h-4 text-purple-500" />
                <span>Preparación: {recipe.prep_time_minutes} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Utensils className="w-4 h-4 text-orange-500" />
                <span>Cocción: {recipe.cook_time_minutes} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-green-500" />
                <span>Raciones originales: {recipe.servings}</span>
              </div>
            </div>
            {recipe.url && (
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Ver fuente original <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <ListOrdered className="w-6 h-6 text-blue-500" />
              Ingredientes
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Raciones:</span>
                <input
                  type="number"
                  value={servings}
                  onChange={handleServingsChange}
                  min="1"
                  className="w-20 p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-center"
                />
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Medida:</span>
                <select
                  value={unitSystem}
                  onChange={handleUnitChange}
                  className="p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="metric">Métrico (g, ml, l)</option>
                  <option value="imperial">Imperial (oz, fl oz, pt)</option>
                  <option value="us">US Customary (oz, fl oz, qt)</option>
                  <option value="cucharadas">Cucharadas</option>
                  <option value="tazas">Tazas</option>
                </select>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => {
                const adjustedQuantity = calculateAdjustedQuantity(ingredient.quantity);
                const converted = convertUnits(adjustedQuantity, ingredient.unit, unitSystem);
                return (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>
                      <span className="font-semibold">{converted.quantity} {converted.unit}</span> de {ingredient.item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <ListOrdered className="w-6 h-6 text-green-500" />
              Instrucciones
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecipeDetail;