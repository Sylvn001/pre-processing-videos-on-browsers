import { createFile } from "../deps/mp4box.0.5.2.js";

export default class Mp4Demuxer {
  #onConfig;
  #onChunk;
  #file;
  #init;

  constructor(params) {}

  /**
   *
   * @param {ReadableStream} stream
   * @param {Object} options
   * @param {(config: object) => void} options.onConfig
   * @returns {Promise<void>}
   */
  async run(stream, { onConfig, onChunk }) {
    this.#onConfig = onConfig;
    this.#onChunk = onChunk;

    this.#file = createFile();
    this.#file.onReady = (args) => {
      debugger;
    };

    this.#file = onError = (error) =>
      console.error("deu ruim mp4Demuxer", error);

    this.#init(stream);
  }

  #init(stream){
      const consumeFile = new WritableStream({
        write: (chunk) => {
        debugger
      }, close: () => {
        debugger
      }
    })
  }
}
