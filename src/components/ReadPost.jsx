import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ReadPost = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const navigate = useNavigate();
  async function getApiData() {
    const response = await fetch("/api");
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

  const DeleteHandler = async(id) =>
  {
    const response = await fetch(`http://localhost:4000/api/${id}`, {
      method: "DELETE",
    })
    const result = await response.json();

    if (!response.ok)
    {
      setError(result.error);
    }
    if (response)
    {
      setError("")
      getApiData();
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
          <div key={post._id}>
            <div className="bg-gray-100 p-2 text-center" >
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
              <Link className="bg-blue-200 px-3 py-1 rounded-xl hover:bg-blue-300"
                to={`/${post._id}`}
                >
              Edit
              </Link>
              
              <input
                className="bg-blue-200 px-3 py-1 rounded-xl hover:bg-blue-300"
                type="button"
                value="Delete"
                onClick={()=>DeleteHandler(post._id)}
              />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadPost;
