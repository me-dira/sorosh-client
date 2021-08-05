import "reflect-metadata";
import { injectable } from 'inversify';

/**
 * Main namespace of soroush comments
 */
export namespace Soroush {

    @injectable()
    export class SoroushClient implements Client {
        /**
         * @name Soroush Client object
         * @author <Mehdi Rahimi mediraworkm@gmail.com>
         * @param {token} Your soroush bot token
         * @constructor
         */
        constructor(private readonly token: string) { }

        on(type: SoroushDataTypes, callback: ClientMethodCallback) { }
        message(message: string, callback: ClientMethodCallback) { }
        launch(options: SoroushClientOptions) { }
    }
}
