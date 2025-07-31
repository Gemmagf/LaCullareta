import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Link, FileText } from 'lucide-react';

const AddRecipeForm = ({ onAddRecipe, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [instructionsText, setInstructionsText] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple parsing for ingredients (one per line, quantity and item)
    const parsedIngredients = ingredientsText.split('\n').map(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;
      // Basic attempt to parse quantity and unit, otherwise just item
      const match = trimmedLine.match(/^(\d+(\.\d+)?)\s*([a-zA-Z]+)\s+(.*)$/);
      if (match) {
        return {
          item: match[4].trim(),
          quantity: parseFloat(match[1]),
          unit: match[3].trim().toLowerCase()
        };
      }
      return { item: trimmedLine, quantity: 0, unit: '' };
    }).filter(Boolean);

    // Simple parsing for instructions (one per line)
    const parsedInstructions = instructionsText.split('\n').map(line => line.trim()).filter(Boolean);

    const newRecipe = {
      title,
      description,
      url,
      imageUrl,
      ingredients: parsedIngredients,
      instructions: parsedInstructions,
      prep_time_minutes: parseInt(prepTime) || 0,
      cook_time_minutes: parseInt(cookTime) || 0,
      servings: parseInt(servings) || 1,
    };
    onAddRecipe(newRecipe);
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
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Afegir Nova Recepta</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Títol de la Recepta</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Paella Valenciana"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Descripció Breu</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="2"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="Una descripció curta de la recepta..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="url" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <Link className="w-4 h-4" /> Enllaç (URL)
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://www.larecepta.com"
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" /> URL de la Imatge
              </label>
              <input
                type="url"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://imatge.com/recepta.jpg"
              />
            </div>
          </div>

          <div>
            <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients (un per línia, ex: 500g de Patates)</label>
            <textarea
              id="ingredients"
              value={ingredientsText}
              onChange={(e) => setIngredientsText(e.target.value)}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="500g de Patates&#10;6 unitats d'Ous&#10;1 Cebolla"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">Instruccions (un pas per línia)</label>
            <textarea
              id="instructions"
              value={instructionsText}
              onChange={(e) => setInstructionsText(e.target.value)}
              rows="7"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="1. Pela i talla les patates.&#10;2. Fregeix les patates.&#10;3. Barreja amb els ous."
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="prepTime" className="block text-gray-700 font-medium mb-2">Temps de Preparació (minuts)</label>
              <input
                type="number"
                id="prepTime"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="cookTime" className="block text-gray-700 font-medium mb-2">Temps de Cocció (minuts)</label>
              <input
                type="number"
                id="cookTime"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="servings" className="block text-gray-700 font-medium mb-2">Racions</label>
              <input
                type="number"
                id="servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
                min="1"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5" />
            Afegir Recepta
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddRecipeForm;