/* eslint-disable max-len */
import {Client, SoroushDataTypes, ClientMethodCallback, SoroushClientOptions} from '../../interfaces';
import {Constants} from './../../constants';

export class SoroushClient implements Client {
  constructor(private readonly token: string, private eventSource?: EventSource) {}

  /**
   * Generate EventSource to listen to income
   * soroush messages.
   * @return {EventSource} Connected to Soroush api server.
   */
  private prepareEventSource(): EventSource {
    const SSEUri = this.generateSSEUri();
    const eventSource = !this.eventSource ? new EventSource(SSEUri) : this.eventSource;

    this.eventSource = eventSource;
    return eventSource;
  }

  /**
   * Gathers prepared uri constant and merges token into it
   * then we are free to use it to connect into sse server.
   * @param {string} _uri This is optional to use.
   * @return {string}
   */
  private generateSSEUri(): string {
    return Constants.SSE.uri.replace(/#token/i, this.token);
  }

  /**
   * Just listen on incoming types like 'text', 'image' or ...
   * @param {SoroushDataTypes} _type acceptable dataTypes
   * @param {Function} _callback callback to invoke after specified data
   * incomes.
   */
  on(_type: SoroushDataTypes, _callback: ClientMethodCallback): void {}

  /**
   * Listen to a message!
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
