export const formatPrice = (price: number) => { 
  return Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
  }).format(price);
};