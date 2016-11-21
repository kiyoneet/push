'use strict';

let push = require('web-push');

const GCM_API_KEY = 'AAAArtPIfKw:APA91bGo0Ci8XvJP35esGkYggAuh4TCe-ALzI_C7M991GVWg9bbnzBZFMe9uXl0xZnRqroKE9nuPm5x043CB6wvxOjZClbHS-fwdn5X-hqv3U9JH0VsCiTngUOikNjYpqyYQX8ATxuaZ4JZaQvPKISg-QAJ89FPcQg';
push.setGCMAPIKey(GCM_API_KEY);

const data = {
    'endpoint': '********',
    'userAuth': '********',
    'userPublicKey': '********'
};

push.sendNotification(data.endpoint, {
    payload:       'push test for service worker',
    userAuth:      data.userAuth,
    userPublicKey: data.userPublicKey,
})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error('fail', err);
    });
