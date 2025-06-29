type Status = "active" | "inactive" | "pending";

interface Account {
  username: string;
  status: Status;
  lastLogin?: Date;
}

function isActive(account: Account): boolean {
  return account.status === "active";
}

//test
const accounts: Account[] = [
  {
    username: "Hans",
    status: "active",
    lastLogin: new Date("2025-06-01T00:00:01"),
  },
  {
    username: "Peter",
    status: "inactive",
    lastLogin: new Date("2000-01-01T06:30:36"),
  },
  {
    username: "Dieter",
    status: "pending",
  },
  {
    username: "Ulrich",
    status: "active",
    lastLogin: new Date("2024-12-24T10:30:00"),
  },
];
for (const account of accounts) {
  const output = isActive(account) ? "yes" : "no";
  console.log(`${account.username} is active? ` + output);
}
