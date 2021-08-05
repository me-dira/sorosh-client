import 'reflect-metadata';
import {Container, inject, injectable} from 'inversify';
import {TYPES} from './TYPES';

export namespace Soroush {
  @injectable()
  export class SoroushClient implements Client {
    constructor(@inject(TYPES.token) private readonly token: string,
        @inject(EventSource) private eventServer: EventSource) {}

    /**
     * Just listen on incoming types like 'text', 'image' or ...
     * @param {SoroushDataTypes} _type acceptable dataTypes
     * @param {Function} _callback callback to invoke after specified data
     * incomes.
     */
    on(_type: SoroushDataTypes, _callback: ClientMethodCallback): void {}

    /**
     * Message is depricated !
     * @param {string} _message Your message to listen
     * @param {ClientMethodCallback} _callback callback fn to invoke when
     * specified message overcomes to our listener.
     */
    message(_message: string, _callback: ClientMethodCallback) {}

    /**
     * Options for lunching Soroush Client
     * @param {SoroushClientOptions} _options options
     */
    launch(_options: SoroushClientOptions) {}
  }
}

const token = process.env.SOROUSH_BOT_TOKEN;
const SoroushContainer = new Container();

SoroushContainer.bind<Soroush.SoroushClient>(Soroush.SoroushClient)
    .toSelf().inSingletonScope();

SoroushContainer.bind<string>(TYPES.token).toConstantValue(token);

SoroushContainer.bind<EventSource>(EventSource)
    .toSelf().inSingletonScope();

export default SoroushContainer;
