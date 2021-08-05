import "reflect-metadata";

export namespace Soroush {
    /**
     * @name Soroush Client object
     * @author <Mehdi Rahimi mediraworkm@gmail.com>
     */
    export class SoroushClient implements Client {
        constructor() {

        }

        on(type: SoroushDataTypes, callback: ClientMethodCallback) { }
        message(message: string, callback: ClientMethodCallback) { }
        launch(options: SoroushClientOptions) { }
    }
}