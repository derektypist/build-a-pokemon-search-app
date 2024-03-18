# Build a Pokémon Search App

Build an app that searches for Pokémon by name or ID and displays the results to the user.  This project makes use of freeCodeCamp's [PokéAPI Proxy](https://pokeapi-proxy.freecodecamp.rocks).

## UX

**Getting Started**

Enter the name of the Pokémon (e.g. Pikachu) or ID in the input field.  Click on the search button.

**User Stories**

1.  As a user, I should have an `input` element with an `id` of `search-input`.

2.  As a user, I should have a `button` element with an `id` of `search-button`.

3.  As a user, I should have an element with an `id` of `pokemon-name`.

4.  As a user, I should have an element with an `id` of `pokemon-id`.

5.  As a user, I should have an element with an `id` of `weight`.

6.  As a user, I should have an element with an `id` of `height`.

7.  As a user, I should have an element with an `id` of `types`.

8.  As a user, I should have an element with an `id` of `hp`.

9.  As a user, I should have an element with an `id` of `attack`.

10.  As a user, I should have an element with an `id` of `defense`.

11.  As a user, I should have an element with an `id` of `special-attack`.

12.  As a user, I should have an element with an `id` of `special-defense`.

13.  As a user, I should have an element with an `id` of `speed`.

14.  As a user, where the input field contains `Red` and I click on the search button, an alert should appear with the text `Pokémon not found`.

15.  As a user, where the input field contains `Pikachu` and I click on the search button, the values in the ids of `pokemon-name`, `pokemon-id`, `weight`, `height`, `types`, `hp`, `attack`, `defense`, `special-attack`, `special-defense` and `speed` should be `PIKACHU`, `#25` or `25`, `Weight: 60` or `60`, `Height: 4` or `4`, `35`, `55`, `40`, `50`, `50` and `90` respectively.

16.  As a user, I expect an `img` element with an `id` of sprite and the `src` set to the Pokémon's `front_default` sprite to the page.

17.  As a user, where the input field contains `94` and I click on the search button, the values in the ids of `pokemon-name`, `pokemon-id`, `weight`, `height`, `types`, `hp`, `attack`, `defense`, `special-attack`, `special-defense` and `speed` should be `GENGAR`, `#94` or `94`, `Weight: 405` or `405`, `Height: 15` or `15`, `60`, `65`, `60`, `130`, `75` and `110` respectively.

18.  As a user, where the input field contains `Pikachu` and I click on the search button, the `id` of `types` should contain a single inner element with the value `ELECTRIC`.  The element with `id` of `types` should be cleared between searches.

19.  As a user, where the input field contains `94` and I click on the search button, the `id` of `types` should contain two inner elements with the text values `GHOST` and `POISON` respectively.  The element with `id` of `types` should be cleared between searches.

## Features

Allows the user to search the Pokémon by name or ID in order to get the results.

## Technologies

Uses HTML5, CSS3 and JavaScript.

## Testing

Make sure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/build-a-pokemon-search-app/) at the main branch.

## Credits

### Acknowledgements

[FreeCodeCamp - JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)

