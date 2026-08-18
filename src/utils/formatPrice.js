export const formatPrice = (value) =>
  new Intl.NumberFormat("sv-SE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
