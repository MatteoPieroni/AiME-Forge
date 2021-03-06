/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Shared Partials
    "systems/aime/templates/actors/parts/active-effects.html",

    // Actor Sheet Partials
    "systems/aime/templates/actors/parts/actor-traits.html",
    "systems/aime/templates/actors/parts/actor-inventory.html",
    "systems/aime/templates/actors/parts/actor-features.html",
    "systems/aime/templates/actors/parts/actor-spellbook.html",
    "systems/aime/templates/actors/parts/actor-background.html",

    // Item Sheet Partials
    "systems/aime/templates/items/parts/item-action.html",
    "systems/aime/templates/items/parts/item-activation.html",
    "systems/aime/templates/items/parts/item-description.html",
    "systems/aime/templates/items/parts/item-background-description.html",
    "systems/aime/templates/items/parts/item-mountable.html"
  ]);
};
