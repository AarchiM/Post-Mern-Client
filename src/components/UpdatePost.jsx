import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [age, setAge] = useState(0);

  const getUser = async () =>
  {
    const response = await fetch(`http://localhost:4000/api/${ id }`);
    const result = await response.json();

    if (!response)
    {
      setError(result.error);
    }
    if (response)
    {
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
      setError("")
    }
  }

  const EditHandler = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    const response = await fetch(`/api/${id}`, {
      method: "PATCH",
      body: JSON.stringify(addUser),
      headers: {
        "Content-type": "application/json",
      },
    });
    

    const result = await response.json();

    if(response.ok){
      console.log(result.error);
      setError(result.error)
    }
    else{
      setName("")
      setEmail("")
      setAge(0)
      setError("")
      navigate("/allpost");
    }
  };

  useEffect(() =>
  {
    getUser();
  }, [])
  
  return (
    <>
      <div>
      {error && <div className="bg-red-200 p-2 text-center">
        {error}
        </div>}
        <div className="flex flex-col w-full  justify-center items-center m-auto">
          <h1 className="text-2xl font-bold p-5">Enter The Data</h1>
          <hr className="w-1/6" />
          <form
            onSubmit={EditHandler}
            className="flex w-full px-20 flex-col "
          >
            <label className="flex w-full p-3 " htmlFor="name">
              Name :
            </label>
            <input
              className="flex w-full p-3 bg-slate-100 focus:outline-none"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="flex w-full p-3 " htmlFor="email">
              Email :
            </label>
            <input
              className="flex w-full p-3  bg-slate-100 focus:outline-none"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="flex w-full p-3 " htmlFor="age">
              Age :
            </label>
            <input
              className="flex w-full p-3  bg-slate-100 focus:outline-none"
              type="number"
              name="name"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button
              className="flex w-1/4 items-center m-auto mt-10 justify-center px-10 py-2 bg-blue-400 rounded-2xl "
              type="submit"
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
