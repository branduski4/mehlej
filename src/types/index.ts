export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "rings" | "necklaces" | "earrings" | "bracelets" | "watches";
  stock: number;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface User {
  uid: string;
  email: string;
  role: "admin" | "customer";
  displayName?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}
