export const getSubtotalWithTax = (subtotal: number) => {
  const CALIFORNIA_TAX_RATE = 6.0;
  const MANDATORY_LOCAL_RATE = 1.25;
  const SALES_TAX_RATE = (CALIFORNIA_TAX_RATE + MANDATORY_LOCAL_RATE) / 100;
  const ROUNDED_SALES = Math.round(SALES_TAX_RATE * 1000) / 1000;
  const tax = parseFloat((subtotal * ROUNDED_SALES).toFixed(2));
  const total = (subtotal + tax).toFixed(2);
  return total;
};

export const dollarFormat = (total: number) =>
  total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
