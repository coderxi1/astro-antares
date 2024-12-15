import { DEFAULT_FRONTMATTER } from '@/config'

export const titleColor2gcTextstyleVars = (titleColor?: string) => {
  if (!titleColor) titleColor = DEFAULT_FRONTMATTER.titleColor
  let [lightColorsStr, darkColorsStr = lightColorsStr] = titleColor?.split('|')
  lightColorsStr = lightColorsStr.includes(',') ? lightColorsStr : lightColorsStr + ',' + lightColorsStr
  darkColorsStr = darkColorsStr.includes(',') ? darkColorsStr : darkColorsStr + ',' + darkColorsStr
  return `--gc-text-bgimg:linear-gradient(to right,${lightColorsStr}); --gc-text-bgimg-dark:linear-gradient(to right,${darkColorsStr});`
}

export const ensureTitleIcon = (titleIcon?:string) => {
  if (!titleIcon) titleIcon = DEFAULT_FRONTMATTER.titleIcon
  let [ lightIcon, darkIcon = lightIcon ] = titleIcon?.split('|')
  return { light: lightIcon, dark: darkIcon }
}