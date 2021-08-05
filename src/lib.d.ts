declare interface SoroushClientOptions {}

// Interface to predict any method we need
// eslint-disable-next-line no-unused-vars
declare interface Client {
  on: (type: SoroushDataTypes, callback: ClientMethodCallback) => void;
  message: (message: string, callback: ClientMethodCallback) => void;
  launch: (options: SoroushClientOptions) => void;
}

declare type ClientMethodCallback = (income: object) => void;
declare type SoroushDataTypes = 'text' | 'picture' | 'sticker';
