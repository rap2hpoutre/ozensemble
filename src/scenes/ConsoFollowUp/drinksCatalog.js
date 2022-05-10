import CocktailBottle from '../../components/Illustrations/CocktailBottle';
import CocktailGlass from '../../components/Illustrations/CocktailGlass';
import HalfBeer from '../../components/Illustrations/HalfBeer';
import Pint from '../../components/Illustrations/Pint';
import WineBottle from '../../components/Illustrations/WineBottle';
import WineGlass from '../../components/Illustrations/WineGlass';
import PintCider from '../../components/Illustrations/PintCider';
import HalfCider from '../../components/Illustrations/HalfCider';
import Shoot from '../../components/Illustrations/Shoot';
import Flasque from '../../components/Illustrations/Flasque';
import ChampagneBottle from '../../components/Illustrations/ChampagneBottle';
import ChampagneGlass from '../../components/Illustrations/ChampagneGlass';

// categories
export const BEER = 'Bières';
export const WINE = 'Vins';
export const CHAMPAGNE = 'Champagne';
export const CIDER = 'Cidre';
export const HARD = 'Cocktails et spiritueux';

// subCategories
export const NO_CONSO = 'no-conso';
export const BEER_HALF = 'beer-half';
export const BEER_PINT = 'beer-pint';
export const CIDER_HALF = 'cider-half';
export const CIDER_PINT = 'cider-pint';
export const WINE_GLASS = 'wine-glass';
export const WINE_BOTTLE = 'wine-bottle';
export const CHAMPAGNE_GLASS = 'champagne-glass';
export const CHAMPAGNE_BOTTLE = 'champagne-bottle';
export const HARD_COCKTAIL = 'hard-cocktail';
export const HARD_BOTTLE = 'hard-bottle';
export const HARD_SHOOT = 'hard-shoot';
export const HARD_FLASQUE = 'hard-flasque';

export const getDrinkQuantityFromDrinks = (drinks, drinkKey) => {
  const drink = drinks.find((d) => d.drinkKey === drinkKey);
  if (drink) return drink.quantity;
  return 0;
};

const getDoseOfDrink = (volume, degrees) => {
  /*
  http://www.ama.lu/alcool_2verres.php

  Méthode: 1 dose = 10g d'alcool
  Exemples pour 1 dose:
  25cl à 5deg
  10cl à 12deg
  3cl à 40deg
  7cl à 18deg
  DONC
  Volume x degrees / 12 ≈ 10 grammes = 1 dose
 */
  return Math.round((volume * degrees) / 12 / 10);
};

export const mapDrinkToDose = ({ drinkKey, quantity }, catalog) => {
  if (drinkKey === NO_CONSO) return 0;
  const drink = catalog.find((drink) => drink.drinkKey === drinkKey);
  return drink.doses * quantity;
};

export const getDrinksKeysFromCatalog = (catalog) =>
  catalog.filter(({ active }) => Boolean(active)).map(({ drinkKey }) => drinkKey);

export const getDisplayName = (drinkKey, quantity, catalog) => {
  try {
    const drink = catalog.find((drink) => drink.drinkKey === drinkKey);
    return drink.custom ? drink.displayFeed : drink.displayFeed(quantity);
  } catch (e) {
    console.log('error getDisplayName', e);
    console.log(drinkKey, quantity, catalog);
    return 0;
  }
};

export const getDisplayDrinksModalName = (drinkKey, catalog) => {
  const drink = catalog.find((drink) => drink.drinkKey === drinkKey);
  return drink.displayDrinkModal.capitalize();
};

export const getVolume = (drinkKey, catalog) => {
  const drink = catalog.find((drink) => drink.drinkKey === drinkKey);
  return drink.volume;
};

export const getIcon = (drinkKey, catalog) => {
  const drink = catalog.find((drink) => drink.drinkKey === drinkKey);
  if (drink.custom) {
    const evDrink = drinksCatalog.find((catDrink) => catDrink.drinkKey === drink.iconOf);
    if (!evDrink) return HalfBeer;
    return evDrink.icon;
  }
  return drink.icon;
};

export const formatNewDrink = (name, quantity, degrees, drinkKey) => ({
  categoryKey: `${name}-${quantity}-${degrees}`,
  drinkKey: `${name}-${quantity}-${degrees}`,
  displayFeed: name,
  displayDrinkModal: name,
  volume: `${quantity} cl - ${degrees}˚`,
  doses: getDoseOfDrink(quantity, degrees),
  custom: true,
  active: true,
  iconOf: drinkKey,
});

export const drinksCatalog = [
  {
    categoryKey: BEER,
    drinkKey: BEER_HALF,
    displayFeed: (q) => (q > 1 ? 'bières' : 'bière'),
    displayDrinkModal: 'demi',
    displayFormDrink: 'Demi\u00A0(25cl)',
    volume: '25 cl - 4˚',
    doses: 1,
    icon: HalfBeer,
  },
  {
    categoryKey: BEER,
    drinkKey: BEER_PINT,
    displayFeed: (q) => (q > 1 ? 'bières' : 'bière'),
    displayDrinkModal: 'pinte',
    displayFormDrink: 'Pinte\u00A0(50cl)',
    volume: '50 cl - 4˚',
    doses: 2,
    icon: Pint,
  },
  {
    categoryKey: WINE,
    drinkKey: WINE_GLASS,
    displayFeed: (q) => (q > 1 ? 'verres de vin' : 'verre de vin'),
    displayDrinkModal: 'verre',
    displayFormDrink: 'Verre\u00A0(12cl)',
    volume: '12 cl - 12˚',
    doses: 1,
    icon: WineGlass,
  },
  {
    categoryKey: WINE,
    drinkKey: WINE_BOTTLE,
    displayFeed: (q) => (q > 1 ? 'bouteilles de vin' : 'bouteille de vin'),
    displayDrinkModal: 'bouteille',
    displayFormDrink: 'Bouteille de\u00A0vin',
    volume: '75 cl - 12˚',
    doses: 8,
    icon: WineBottle,
  },
  {
    categoryKey: CHAMPAGNE,
    drinkKey: CHAMPAGNE_GLASS,
    displayFeed: (q) => (q > 1 ? 'verres de champagne' : 'verre de champagne'),
    displayDrinkModal: 'coupe',
    displayFormDrink: 'coupe\u00A0(25cl)',
    volume: '12cl',
    doses: 1,
    icon: ChampagneGlass,
  },
  {
    categoryKey: CHAMPAGNE,
    drinkKey: CHAMPAGNE_BOTTLE,
    displayFeed: (q) => (q > 1 ? 'Bouteilles de champagnes' : 'Bouteille de champagne'),
    displayDrinkModal: 'Bouteille',
    displayFormDrink: 'Bouteille\u00A0(75cl)',
    volume: '75cl',
    doses: 2,
    icon: ChampagneBottle,
  },
  {
    categoryKey: CIDER,
    drinkKey: CIDER_HALF,
    displayFeed: (q) => (q > 1 ? 'cidres' : 'cidre'),
    displayDrinkModal: 'demi',
    displayFormDrink: 'Demi\u00A0(25cl)',
    volume: '25 cl - 4˚',
    doses: 1,
    icon: HalfCider,
  },
  {
    categoryKey: CIDER,
    drinkKey: CIDER_PINT,
    displayFeed: (q) => (q > 1 ? 'cidres' : 'cidre'),
    displayDrinkModal: 'pinte',
    displayFormDrink: 'Pinte\u00A0(50cl)',
    volume: '50 cl - 4˚',
    doses: 2,
    icon: PintCider,
  },
  {
    categoryKey: HARD,
    drinkKey: HARD_COCKTAIL,
    displayFeed: (q) => (q > 1 ? 'cocktails' : 'cocktail'),
    displayDrinkModal: 'cocktail',
    displayFormDrink: 'Spiritueux (3\u00A0à\u00A05cl)',
    volume: '5 cl - 40˚',
    doses: 1,
    icon: CocktailGlass,
  },
  {
    categoryKey: HARD,
    drinkKey: HARD_BOTTLE,
    displayFeed: (q) => (q > 1 ? 'bouteilles de spiritueux' : 'bouteille de spiritueux'),
    displayDrinkModal: 'bouteille',
    displayFormDrink: 'Bouteille de spiritueux',
    volume: '75 cl - 40˚',
    doses: 22,
    icon: CocktailBottle,
  },
  {
    categoryKey: "",
    drinkKey: HARD_SHOOT,
    displayFeed: (q) => (q > 1 ? 'shoots' : 'shoot'),
    displayDrinkModal: 'shoot',
    displayFormDrink: 'Spiritueux (3\u00A0à\u00A05cl)',
    volume: '3 cl',
    doses: 1,
    icon: Shoot,
  },
  {
    categoryKey: "",
    drinkKey: HARD_FLASQUE,
    displayFeed: (q) => (q > 1 ? 'flasques' : 'flasque'),
    displayDrinkModal: 'Flasque',
    displayFormDrink: 'Bouteille de spiritueux',
    volume: '30 cl',
    doses: 22,
    icon: Flasque,
  },
];
