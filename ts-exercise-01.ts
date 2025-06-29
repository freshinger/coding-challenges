interface User {
  id: number;
  name: string;
  email: string;
}

function getUserInfo(user: User): string {
  return `User ${user.id}: ${user.name} (${user.email})`;
}

//test
const hans: User = {
  id: 1,
  name: "Hans",
  email: "hansi@email.com",
};
console.log(getUserInfo(hans));
