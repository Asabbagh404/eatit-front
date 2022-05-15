export function totalComplementPrice (element) {
  if (!element || element.length === 0) return 0
  return element.complements.reduce((tot, complement) => {
    return tot + (complement.complementLines.reduce((tot, line) => {
      if (line.isChecked) return tot + line.priceTaxed
      return tot
    }, 0))
  }, 0)
}
