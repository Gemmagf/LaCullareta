export const defaultRecipes = [
  {
    id: '1',
    title: 'Paella Valenciana',
    description: 'La auténtica paella, para cuando te sientas ambicioso y con ganas de ensuciar muchas sartenes.',
    imageUrl: 'https://images.unsplash.com/photo-1563612116625-30103d3ecc09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://www.recetas.com/paella-valenciana',
    ingredients: [
      { item: 'Arroz bomba', quantity: 400, unit: 'gramos' },
      { item: 'Pollo', quantity: 200, unit: 'gramos' },
      { item: 'Conejo', quantity: 200, unit: 'gramos' },
      { item: 'Judías verdes', quantity: 150, unit: 'gramos' },
      { item: 'Garrofón', quantity: 100, unit: 'gramos' },
      { item: 'Tomate triturado', quantity: 100, unit: 'gramos' },
      { item: 'Aceite de oliva', quantity: 50, unit: 'mililitros' },
      { item: 'Azafrán', quantity: 0.5, unit: 'gramos' },
      { item: 'Agua', quantity: 1.5, unit: 'litros' },
      { item: 'Sal', quantity: 5, unit: 'gramos' }
    ],
    instructions: [
      'Sofríe el pollo y el conejo en aceite de oliva hasta que estén dorados.',
      'Añade las judías verdes, el garrofón y el tomate triturado. Cocina por unos minutos.',
      'Incorpora el arroz y el azafrán. Remueve bien para que el arroz se impregne de los sabores.',
      'Vierte el agua caliente y la sal. Lleva a ebullición y luego reduce el fuego a medio.',
      'Cocina sin remover durante unos 18-20 minutos, o hasta que el arroz haya absorbido todo el líquido y esté en su punto.',
      'Deja reposar unos minutos antes de servir.'
    ],
    prep_time_minutes: 30,
    cook_time_minutes: 40,
    servings: 4
  },
  {
    id: '2',
    title: 'Tortilla de Patatas',
    description: 'El clásico español, perfecto para cualquier momento del día, especialmente si no tienes nada más que cocinar.',
    imageUrl: 'https://images.unsplash.com/photo-1620461900000-20217978729c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://www.recetas.com/tortilla-patatas',
    ingredients: [
      { item: 'Patatas', quantity: 500, unit: 'gramos' },
      { item: 'Huevos', quantity: 6, unit: 'unidades' },
      { item: 'Cebolla', quantity: 1, unit: 'unidad' },
      { item: 'Aceite de oliva', quantity: 200, unit: 'mililitros' },
      { item: 'Sal', quantity: 3, unit: 'gramos' }
    ],
    instructions: [
      'Pela y corta las patatas en rodajas finas. Si usas cebolla, córtala en juliana.',
      'Calienta abundante aceite de oliva en una sartén. Añade las patatas (y cebolla) y fríe a fuego medio-bajo hasta que estén tiernas y ligeramente doradas. Escurre bien el aceite.',
      'En un bol grande, bate los huevos con la sal. Incorpora las patatas escurridas y mezcla bien.',
      'Calienta un poco de aceite en una sartén antiadherente. Vierte la mezcla y cocina a fuego medio-bajo, dándole forma con una espátula.',
      'Cuando los bordes estén cuajados, dale la vuelta con la ayuda de un plato y cocina por el otro lado hasta que esté dorada y a tu gusto.',
      'Sirve caliente o a temperatura ambiente.'
    ],
    prep_time_minutes: 15,
    cook_time_minutes: 25,
    servings: 4
  },
  {
    id: '3',
    title: 'Gazpacho Andaluz',
    description: 'Sopa fría de tomate, ideal para el verano o para cuando te da pereza encender el fuego.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://www.recetas.com/gazpacho-andaluz',
    ingredients: [
      { item: 'Tomates maduros', quantity: 1000, unit: 'gramos' },
      { item: 'Pepino', quantity: 1, unit: 'unidad' },
      { item: 'Pimiento verde', quantity: 1, unit: 'unidad' },
      { item: 'Cebolla', quantity: 0.5, unit: 'unidad' },
      { item: 'Ajo', quantity: 1, unit: 'diente' },
      { item: 'Pan duro', quantity: 50, unit: 'gramos' },
      { item: 'Aceite de oliva virgen extra', quantity: 50, unit: 'mililitros' },
      { item: 'Vinagre de Jerez', quantity: 20, unit: 'mililitros' },
      { item: 'Agua fría', quantity: 100, unit: 'mililitros' },
      { item: 'Sal', quantity: 5, unit: 'gramos' }
    ],
    instructions: [
      'Lava y trocea todas las verduras (tomates, pepino, pimiento, cebolla, ajo).',
      'Remoja el pan duro en un poco de agua.',
      'En una batidora de vaso, introduce todas las verduras troceadas, el pan remojado, el aceite de oliva, el vinagre y la sal.',
      'Tritura a máxima potencia hasta obtener una crema muy fina y homogénea. Si es necesario, añade un poco más de agua fría para ajustar la consistencia.',
      'Pasa la mezcla por un colador fino para eliminar pieles y semillas, obteniendo un gazpacho aún más suave.',
      'Refrigera el gazpacho al menos 2 horas antes de servir para que esté bien frío. Sirve con picatostes o verduras picadas si lo deseas.'
    ],
    prep_time_minutes: 20,
    cook_time_minutes: 0,
    servings: 6
  }
];