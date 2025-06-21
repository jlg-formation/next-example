# Next Example

This app has :

- a back-end that manages an article list.
- a front-end that allows a user to retrieve, add or delete articles.

## Exercices

## Prettier

- Install a prettier to format the code, both in the back and front.

## Deploy

- What are the market solution to deploy for free this app without a lot of
  change in the code, at least for demo purpose ?
- See the [deployment on VPS](./docs/deploiement-nextjs-nginx.md) document.

## Hook

### useState

- Analyse the code to see the useState.
- useState on an object
- NextJS : no "new Date()" dans l'initialisation d'un composant

### useEffect

- Ajouter un chronomètre sur la page des infos légales
- Verifier que le chronomèttre s'arrête bien quand on quitte la page.
- Ajouter un bouton start stop. Pourquoi useRef est-il parfois bien utile en
  lieu et place de useState ?

### useMemo

- c'est le computed de Angular ou VueJS

### useCallback

- Evite de faire des rerender sur les enfants
  - Exemple: handleClick sur `<Button />`
- Evite d'appeler trop de useEffect qui contiennent des appels de fonctions
  internes au composant.
- Evite d'utilise useCallback sinon (surchage de perf)
  - Evite d'utiliser useCallback si il n'est pas appelé sur un composant enfant,
    ou un useEffect.

### useRef

- Tu dois modifier un truc (DOM, timer, etc.), sans provoquer de rerender.

### useContext

- a utiliser pour faire un contexte partagé avec une grappe de composant
- faire un const { articles, isLoading, error } = useArticles()
