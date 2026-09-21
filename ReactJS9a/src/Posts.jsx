import { useState } from "react";
import useFetch from "./useFetch";

function Posts() {

  const [userId, setUserId] = useState("");

  const url = userId
    ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    : "https://jsonplaceholder.typicode.com/posts";

  const { data, loading, error } = useFetch(url);

  return (
    <div>

      <h2>Posts using useEffect and Custom Hook</h2>

      <label>Select User: </label>

      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
        <option value="4">User 4</option>
        <option value="5">User 5</option>
      </select>

      <br />
      <br />

      {loading && <p>Loading posts...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          {data.slice(0, 10).map((post) => (
            <div className="post" key={post.id}>

              <h3>{post.title}</h3>

              <p>{post.body}</p>

              <small>User ID: {post.userId}</small>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Posts;