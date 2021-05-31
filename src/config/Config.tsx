interface configType {
  apiKey : string|undefined,
  authDomain : string|undefined,
  projectId : string|undefined,
  storageBucket : string|undefined,
  messagingSenderId : string|undefined,
  appId : string|undefined,

}


export const firebaseConfig: configType = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  