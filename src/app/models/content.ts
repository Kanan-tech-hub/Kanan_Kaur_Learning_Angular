export interface Content {
  id: number;
  title: string;
  creator: string;
  type: string;
  description?: string;
  imageUrl?: string;   // <--- MUST HAVE THIS
  price?: number;      // <--- Helps your CurrencyPipe
  releaseDate?: Date;  // <--- Helps your DatePipe
}