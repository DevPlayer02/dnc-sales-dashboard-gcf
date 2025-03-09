/**
 *   Convert text from highlight api
 *  @param text - Text to be converted
 *  @returns Converter text
 */

export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Meta não atingida'
    case 'success':
      return '* Meta do mês atingida! Parabéns'
    case 'warning':
      return '* Pouco para meta ser atingida'
    default:
      return '* Sem dados no momento'
  }
}
