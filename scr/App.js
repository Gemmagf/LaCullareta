import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // Nuevo componente
import { defaultRecipes } from './mock/recipes';
import { BookOpenText, PlusCircle } from 'lucide-react';

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    // Intentar cargar recetas del localStorage al inicio
    const savedRecipes = localStorage.getItem('myRecipes');
    return savedRecipes ? JSON.parse(savedRecipes) : defaultRecipes;
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Guardar recetas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('myRecipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleSelectRecipe = (recipeId) => {
    const recipe = recipes.find(r => r.id === recipeId);
    setSelectedRecipe(recipe);
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [
      {
        ...newRecipe,
        id: Date.now().toString(), // Generar un ID simple basado en la marca de tiempo
        imageUrl: newRecipe.imageUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Imagen por defecto
      },
      ...prevRecipes
    ]);
    setShowAddForm(false); // Cerrar el formulario después de añadir
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 p-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-10"
        >
          <div className="flex items-center mb-4 sm:mb-0">
            <BookOpenText className="w-12 h-12 text-orange-600 mr-4" />
            <h1 className="text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              Mi Recetario Nerd
            </h1>
          </div>
          <motion.button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlusCircle className="w-5 h-5" />
            Afegir Recepta Nova
          </motion.button>
        </motion.div>

        <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />

        <AnimatePresence>
          {selectedRecipe && (
            <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
          )}
          {showAddForm && (
            <AddRecipeForm onAddRecipe={handleAddRecipe} onClose={() => setShowAddForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;