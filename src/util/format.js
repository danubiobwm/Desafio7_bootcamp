import Intl from 'intl';
import 'intl/locale-data/jsonp/en-ZA';

export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
