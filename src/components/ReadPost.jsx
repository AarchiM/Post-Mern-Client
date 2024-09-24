import React, { useEffect, useState } from "react";

const ReadPost = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function getApiData() {
    const response = await fetch("http://localhost:4000/api");
    const result = await response.json();

    if (!response) {
      console.log(result.error);
      setError(result.error);
    }
    if (response) {
      setData(result);
      setError("");
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="flex w-full m-auto p-14 items-center">
      {error && <div className="bg-red-200 p-2 text-center">{error}</div>}
      <div
        className="grid grid-cols-4 gap-4 w-full"
        style={{ gridAutoRows: "1fr" }}
      >
        {data?.map((post) => (
          <div>
            <div className="bg-gray-100 p-2 text-center" key={post._id}>
              <h3>{post.name}</h3>
              <h6>{post.email}</h6>
              <p>Age: {post.age}</p>
              <p>
                Creation date: {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p>
                Updated date: {new Date(post.updatedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex justify-between bg-black p-3">
              <input
                className="bg-blue-200 px-3 py-1 rounded-xl hover:bg-blue-300"
                type="button"
                value="Edit"
              />
              <input
                className="bg-blue-200 px-3 py-1 rounded-xl hover:bg-blue-300"
                type="button"
                value="Delete"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadPost;
