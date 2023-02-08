export const FileServer = {
  sendFile: (file: File, onProgress: (progress: number) => void) => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener("load", () => {
        onProgress(100);
        resolve(req.response);
      });
      req.upload.addEventListener("error", () => {
        onProgress(0);
        reject(req.response);
      });
      req.upload.addEventListener("progress", event => {
        if (!event.lengthComputable) return;
        onProgress((event.loaded / event.total) * 100);
      });

      const formData = new FormData();
      formData.append("file", file, file.name);
    //   req.open("POST", "https://slash-web-null.herokuapp.com/upload");
      req.send(formData);
    });
  },
};
