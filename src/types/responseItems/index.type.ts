interface Author {
  name: string;
  lastname: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: string;
}

export interface ItemProduct {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ItemProductDetails extends ItemProduct {
  sold_quantity: number;
  description: string;
}

export interface FormattedData {
  author: Author;
  categories: string[];
  items: ItemProduct[];
  status?: number;
}

export interface FormattedDataDetails {
  author: Author;
  item: ItemProductDetails;
}

export interface ResponseItems {
  filters: [
    {
      id: string;
      values: [
        {
          path_from_root: [
            {
              id: string;
              name: string;
            }
          ];
        }
      ];
    }
  ];
  results: [
    {
      id: string;
      title: string;
      currency_id: string;
      price: number;
      decimals: number;
      thumbnail: string;
      condition: string;
      shipping: {
        free_shipping: boolean;
      };
    }
  ];
}
