/* eslint-disable max-len */
import {EventEmitter} from 'stream';
import EventSource from 'eventsource';
import {SoroushFilter} from 'src/typing';
import {Constants} from './../../constants';
import {Client, SoroushDataTypes, ClientMethodCallback, SoroushClientOptions, SSEHeaders} from '../../interfaces';
import {fromEvent, Observable, Subject} from 'rxjs';

export class SoroushClient extends EventEmitter implements Client {
  constructor(private readonly token: string) {
    super();
    this.prepareEventSource();
    this.incomeEvent$ = fromEvent(this.eventSource, 'message');
  }

  /**
   * Event source object that connects to Soroush SSE
   */ private eventSource?: EventSource;

  /**
   * This works to pass data to subscribers
   */ public reactSubject$?: Subject<any>;

  /**
   * This works to pass data to subscribers
   */ public incomeEvent$?: Observable<Event>;

  /**
   * The filters
   */ private filters: SoroushFilter[];

  /**
   * Generate EventSource to listen to income soroush messages.
   * @return {void}
   */
  private prepareEventSource(): void {
    const SSEUri: string = this.generateSSEUri();
    const headers = this.loadHeaders();

    // Set eventSource
    this.eventSource = new EventSource(SSEUri, {headers});

    // Create new observable to pass data into other listeners
    this.reactSubject$ = new Subject();
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
   * Load headers from constants and maps theme into object
   * that we can use.
   * @return {SSEHeaders} mapped headers object
   */
  private loadHeaders(): {headers: SSEHeaders} {
    return {
      headers: {
        accept: Constants.SSE_HEADERS.accept,
        contentType: Constants.SSE_HEADERS.contentType,
      },
    };
  }

  /**
   * Just listen on incoming types like 'text', 'image' or ...
   * @param {SoroushDataTypes} _type acceptable dataTypes
   * @param {Function} _callback callback to invoke after specified data
   * incomes.
   */
  onType(_type: SoroushDataTypes, _callback: ClientMethodCallback): void {}

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
