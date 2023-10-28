import VideoProcessor from "./videoProcessor";

const qvgaConstraints = {
  width: 320,
  height: 240,
};
const vgaConstraints = {
  width: 640,
  height: 480,
};
const hdConstraints = {
  width: 1280,
  height: 720,
};

const encoderConfig = {
  ...qvgaConstraints,
  bitrate: 10e6,
  // WebM
  codec: "vp09.00.10.08",
  pt: 4,
  hardwareAcceleration: "prefer-software",

  // MP4
  // codec: 'avc1.42002A',
  // pt: 1,
  // hardwareAcceleration: 'prefer-hardware',
  // avc: { format: 'annexb' }
};

const videoProcessor = new VideoProcessor();

onmessage = async ({ data }) => {
  await videoProcessor.start({
    file: data.file,
    encoderConfig,
    sendMessage(message) {
      self.postMessage(message);
    },
  });
  setTimeout(() => {
    self.postMessage({ status: "done" });
  }, 2000);
};
