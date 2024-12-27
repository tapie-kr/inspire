import { TypographyVariable } from '@/constants'
import { style } from '@vanilla-extract/css'

export const extraboldStyle = style({
  fontWeight: TypographyVariable.Weight.Extrabold,
})

export const boldStyle = style({
  fontWeight: TypographyVariable.Weight.Bold,
})

export const semiboldStyle = style({
  fontWeight: TypographyVariable.Weight.Semibold,
})

export const mediumStyle = style({
  fontWeight: TypographyVariable.Weight.Medium,
})

export const regularStyle = style({
  fontWeight: TypographyVariable.Weight.Regular,
})

export const lightStyle = style({
  fontWeight: TypographyVariable.Weight.Light,
})
