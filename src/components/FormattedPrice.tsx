import {Text} from 'react-native';
import React from 'react';
type Amount = {
  amount: string;
};
type AmountNumber = {
  amount: number;
};

const FormattedPrice = ({amount}: Amount | AmountNumber) => {
  const FormattedAmount = new Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <Text className="text-base text-gray-950 font-semibold">
      {FormattedAmount}
    </Text>
  );
};

export default FormattedPrice;
