let isLogin = true;

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isLogin) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

testPromise
  .then(() => {
    console.log("succes");
  })
  .catch(() => {
    console.log("err");
  })
  .finally(() => {
    console.log("finish");
  });
