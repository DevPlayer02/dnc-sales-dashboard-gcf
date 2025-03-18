import { highlightTextConverter } from '@/utils'

describe('highlightTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta não atingida')
  })
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* Meta do mês atingida! Parabéns'
    )
  })
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('warning')).toBe(
      '* Pouco para meta ser atingida'
    )
  })
  it('should return the default for unknown input', () => {
    expect(highlightTextConverter('un')).toBe('* Sem dados no momento')
  })
})
