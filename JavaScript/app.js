const firstLogs = () => {
  console.log("log 1");
  console.log("log 2");
};

const middleLogs = (cb) => {
  setTimeout(() => {
    console.log("log 3");
    cb()
  }, 3000);
};

const lastLogs = () => {
  console.log("log 4");
  console.log("log 5");
};

firstLogs()
middleLogs(lastLogs)