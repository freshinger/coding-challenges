//exercise 5
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
async function execute(): Promise<string> {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data[0].title);
  return data[0].title;
}
execute();

//exercise 6
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

async function getUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

async function listUsers() {
  const users = await getUsers();
  for (const user of users) {
    console.log(user.name);
  }
}
listUsers();

//excercise 7

async function postUser(user: User): Promise<void> {
  const response = await axios.post<User>(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  console.log(response);
}

const newUser = {
  id: 0,
  name: "Franz Ferdinand",
  username: "Fuchs27",
  email: "fuchs27@mail.com",
  address: {
    street: "Teichweg",
    suite: "Apt. 27",
    city: "Bristol",
    zipcode: "12345",
    geo: {
      lng: "123",
      lat: "456",
    },
  },
  phone: "555-12345",
  website: "www.website.com",
  company: {
    name: "Companyname 27",
    catchPhrase: "catch a phrase",
    bs: "test",
  },
};

postUser(newUser);
