interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface NewPost {
  title: string;
  body: string;
  userId: number;
}

async function absenden() {
  const userId = document.getElementById("userId") as HTMLInputElement;
  const title = document.getElementById("title") as HTMLInputElement;
  const body = document.getElementById("body") as HTMLTextAreaElement;

  await createPost(title.value, body.innerText, Number.parseInt(userId.value));
}

async function createPost(title: string, body: string, userId: number) {
  try {
    const request = new Request("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const response = await fetch(request);

    if (response.ok) {
      const post: Post = await response.json();

      console.log(post.id);
    }
  } catch (error) {
    showError((error as Error).message);
  }
}

async function fetchPosts() {
  try {
    const request = new Request("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    const response = await fetch(request);

    if (response.ok) {
      const posts: Post[] = await response.json();

      console.log(posts[0].title);
      return posts;
    }
    return [];
  } catch (error) {
    showError((error as Error).message);
  }
}

function showError(message: string): void {
  const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
  const messageTag = document.createElement("p") as HTMLElement;
  messageTag.innerHTML = message;
  body.appendChild(messageTag);
}

async function listPosts(): Promise<void> {
  const postListContainer = document.getElementById("postList") as HTMLElement;
  const posts = await fetchPosts();
  if (posts) {
    for (const post of posts) {
      const item = document.createElement("li");
      item.textContent = `Title: ${post.title}`;
      postListContainer.appendChild(item);
    }
  }
}

const btn = document.getElementById("absenden") as HTMLButtonElement;

btn.addEventListener("click", (event: MouseEvent) => {
  absenden();
});

listPosts();
