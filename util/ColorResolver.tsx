import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig)

// @ts-ignore
export const textDark = fullConfig.theme.colors["mango-gray-darker"];
// @ts-ignore
export const textLight = fullConfig.theme.colors["mango-gray-lighter"];
// @ts-ignore
export const secondaryDark = fullConfig.theme.colors["mango-dark"];
// @ts-ignore
export const secondaryLight = fullConfig.theme.colors["mango-gray-dark"];
