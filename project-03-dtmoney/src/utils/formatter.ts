const formatDate = new Intl.DateTimeFormat("en-US");

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export { formatDate, formatCurrency };
