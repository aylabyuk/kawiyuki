/**
 * A special utility for tailwind classes composition to enable tw intellisence in editor.
 * It's just a developer convenience while working with tw. not really necessary tho' 😛
 * 
 * Before using this util make sure to add the following lines in settings.json file.
 * 
 * "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    ["clsx\\(([^)]*)\\)", "'([^']*)'"]
  ]
 * @param classes a string containing all tailwind classes
 * @returns it will just return what is passed 😛
 */
export const tw = (classes: TemplateStringsArray) => classes
export default tw
