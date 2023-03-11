function convertToUsd(price) {
  const usdFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return usdFormatter.format(price);
}

export { convertToUsd };
