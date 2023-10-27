onmessage = (data) => {
  console.log("recebido!!");
  self.postMessage("hey from worker!!", data);
};
