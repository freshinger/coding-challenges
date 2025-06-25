function checkStatus(person) {
  if (person.status === "online" && person.lastActivity > 10) {
    return "away";
  } else if (person.status === "offline") {
    return "offline";
  } else {
    return "online";
  }
}

function whoIsOnline(input) {
  let output = {};
  let onlineList = [];
  let offlineList = [];
  let awayList = [];
  for (const person of input) {
    let status = checkStatus(person);
    switch (status) {
      case "online":
        onlineList.push(person.username);
        break;
      case "offline":
        offlineList.push(person.username);
        break;
      case "away":
        awayList.push(person.username);
        break;
      default:
        break;
    }

    if (onlineList.length !== 0) {
      output.online = onlineList;
    }
    if (offlineList.length !== 0) {
      output.offline = offlineList;
    }
    if (awayList.length !== 0) {
      output.away = awayList;
    }
  }
  return output;
}
// Test 1
let input1 = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

// Test 2 all offline
let input2 = [
  {
    username: "David",
    status: "offline",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "offline",
    lastActivity: 104,
  },
];

// Test 3 no friends
let input3 = [];

let output = whoIsOnline(input1);
let output2 = whoIsOnline(input2);
let output3 = whoIsOnline(input3);
