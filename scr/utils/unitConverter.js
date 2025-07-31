export const convertUnits = (quantity, unit, targetSystem) => {
  const conversions = {
    metric: {
      gramos: {
        imperial: { unit: 'onzas', factor: 0.035274 },
        us: { unit: 'onzas', factor: 0.035274 },
        cucharadas: { unit: 'cucharadas', factor: 0.07 }, // Aproximado, depende de la densidad
        tazas: { unit: 'tazas', factor: 0.004 } // Aproximado, depende de la densidad
      },
      mililitros: {
        imperial: { unit: 'onzas líquidas', factor: 0.0351951 },
        us: { unit: 'onzas líquidas', factor: 0.033814 },
        cucharadas: { unit: 'cucharadas', factor: 0.067628 },
        tazas: { unit: 'tazas', factor: 0.00422675 }
      },
      litros: {
        imperial: { unit: 'pintas', factor: 1.75975 },
        us: { unit: 'cuartos', factor: 1.05669 },
        cucharadas: { unit: 'cucharadas', factor: 67.628 },
        tazas: { unit: 'tazas', factor: 4.22675 }
      },
      unidades: {
        imperial: { unit: 'unidades', factor: 1 },
        us: { unit: 'unidades', factor: 1 },
        cucharadas: { unit: 'unidades', factor: 1 },
        tazas: { unit: 'unidades', factor: 1 }
      }
    },
    imperial: {
      onzas: {
        metric: { unit: 'gramos', factor: 28.3495 },
        us: { unit: 'onzas', factor: 1 },
        cucharadas: { unit: 'cucharadas', factor: 2 }, // Aproximado
        tazas: { unit: 'tazas', factor: 0.125 } // Aproximado
      },
      'onzas líquidas': {
        metric: { unit: 'mililitros', factor: 28.4131 },
        us: { unit: 'onzas líquidas', factor: 0.96076 },
        cucharadas: { unit: 'cucharadas', factor: 1.6 },
        tazas: { unit: 'tazas', factor: 0.1 }
      },
      pintas: {
        metric: { unit: 'litros', factor: 0.568261 },
        us: { unit: 'pintas', factor: 1.20095 },
        cucharadas: { unit: 'cucharadas', factor: 113.652 },
        tazas: { unit: 'tazas', factor: 2.37859 }
      },
      unidades: {
        metric: { unit: 'unidades', factor: 1 },
        us: { unit: 'unidades', factor: 1 },
        cucharadas: { unit: 'unidades', factor: 1 },
        tazas: { unit: 'unidades', factor: 1 }
      }
    },
    us: {
      onzas: {
        metric: { unit: 'gramos', factor: 28.3495 },
        imperial: { unit: 'onzas', factor: 1 },
        cucharadas: { unit: 'cucharadas', factor: 2 }, // Aproximado
        tazas: { unit: 'tazas', factor: 0.125 } // Aproximado
      },
      'onzas líquidas': {
        metric: { unit: 'mililitros', factor: 29.5735 },
        imperial: { unit: 'onzas líquidas', factor: 1.04084 },
        cucharadas: { unit: 'cucharadas', factor: 2 },
        tazas: { unit: 'tazas', factor: 0.125 }
      },
      cuartos: {
        metric: { unit: 'litros', factor: 0.946353 },
        imperial: { unit: 'pintas', factor: 0.832674 },
        cucharadas: { unit: 'cucharadas', factor: 64 },
        tazas: { unit: 'tazas', factor: 4 }
      },
      unidades: {
        metric: { unit: 'unidades', factor: 1 },
        imperial: { unit: 'unidades', factor: 1 },
        cucharadas: { unit: 'unidades', factor: 1 },
        tazas: { unit: 'unidades', factor: 1 }
      }
    },
    cucharadas: {
      cucharadas: {
        metric: { unit: 'mililitros', factor: 15 }, // 1 cucharada = 15 ml
        imperial: { unit: 'onzas líquidas', factor: 0.5 }, // 1 cucharada = 0.5 fl oz
        us: { unit: 'onzas líquidas', factor: 0.5 } // 1 cucharada = 0.5 fl oz
      }
    },
    tazas: {
      tazas: {
        metric: { unit: 'mililitros', factor: 240 }, // 1 taza = 240 ml
        imperial: { unit: 'onzas líquidas', factor: 8 }, // 1 taza = 8 fl oz
        us: { unit: 'onzas líquidas', factor: 8 } // 1 taza = 8 fl oz
      }
    }
  };

  const lowerCaseUnit = unit.toLowerCase();
  let currentSystem = null;

  for (const sys in conversions) {
    if (conversions[sys][lowerCaseUnit]) {
      currentSystem = sys;
      break;
    }
  }

  if (!currentSystem || !conversions[currentSystem][lowerCaseUnit][targetSystem]) {
    return { quantity: quantity, unit: unit }; // No conversion available
  }

  const conversion = conversions[currentSystem][lowerCaseUnit][targetSystem];
  const convertedQuantity = parseFloat((quantity * conversion.factor).toFixed(2));
  return { quantity: convertedQuantity, unit: conversion.unit };
};