const USD_TO_INR = 90.7;

export const toINR = (usd) => Math.round(Number(usd) * USD_TO_INR);

export const formatINR = (amountInRupees) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amountInRupees);
