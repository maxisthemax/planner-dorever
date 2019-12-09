import firebase from "firebase/app";
const { storage } = firebase;

export function getDownloadUrlPath(gsFilePath, callback) {
  try {
    storage()
      .refFromURL(gsFilePath)
      .getDownloadURL()
      .then(url => callback(url));
  } catch (err) {
    console.log(err);
    callback(null, err);
  }
}
