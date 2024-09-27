// global.d.ts

// Define the structure of your product
interface Product {
    id: number;
    title: string;
    regularPrice: number; // assuming regularPrice is a number
    images: string[];
    properties: string[];
  }
  
  // Define the structure of your JSON data
  interface ProductData {
    products: {
      [key: number]: Product; // A mapping of product IDs to Product objects
    };
  }
  
  // Declare the module for JSON imports with the specific type
  declare module "*.json" {
    const value: ProductData; // Use the defined type
    export default value;
  }
  