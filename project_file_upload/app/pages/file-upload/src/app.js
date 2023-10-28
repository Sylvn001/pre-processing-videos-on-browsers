import Clock from "./deps/clock.js";
import View from "./view.js";

const view = new View();
const clock = new Clock();
let took = "";

const worker = new Worker("./src/worker/worker.js", {
  type: "module",
});

worker.onmessage = ({ data }) => {
  if (data.status !== "done") return;
  clock.stop();
  views.updateElapsedTime(`Process took ${took.replace("ago", "")}`);
  console.log("recebi no processo da view", data);
};

worker.postMessage("enviado do pai");

view.configureOnFileChange((file) => {
  worker.postMessage({ file });

  clock.start((time) => {
    took = time;
    view.updateElapsedTime(`Process started ${time}`);
  });

  setTimeout(() => {
    clock.stop();
    view.updateElapsedTime(`Process took ${took.replace("ago", "")}`);
  }, 5000);
});

async function fakeFetch() {
  const filePath = "/videos/frag_bunny.mp4";
  const response = await fetch(filePath);
  //   debugger;
  const file = new File([await response.blob()], filePath, {
    type: "video/mp4",
    lastModified: Date.now(),
  });

  const event = new Event("change");
  Reflect.defineProperty(event, "target", { value: { files: [file] } });
  document.getElementById("fileUpload").dispatchEvent(event);
}

fakeFetch();
