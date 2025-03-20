export declare global {
  /* Configure global types here*/
  interface Window extends globalThis.Window { 
    versions: {
      [id: string]: () => string,
    }
  }
}
