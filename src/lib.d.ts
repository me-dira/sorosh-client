


/**
 * Interfaces for soroush client ------------------
 */
declare interface SoroushClientOptions {}

// Interface to predict any method we need
declare interface Client {
    on: (type: SoroushDataTypes, callback: ClientMethodCallback) => void,
    message: (message: string, callback: ClientMethodCallback) => void,
    launch: (options: SoroushClientOptions) => void,
}
/**
 * Types for soroush client. ---------------------
 */
declare type ClientMethodCallback = (income: object) => void;
declare type SoroushDataTypes = 'text' | 'picture' | 'sticker';

