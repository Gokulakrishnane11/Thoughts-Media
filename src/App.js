import "./App.css";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Post from "./Post";
import { Link } from "react-router-dom"; // link component path.
import { Route, Routes } from "react-router-dom"; // is used to routes and routes the component.
import PostLayout from "./PostLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // is used to navigate paths
import api from "./api";
import { format } from "date-fns"; // that is used to format date
import EditPost from "./EditPost";
function App() {
  //^ state for home page post
  const [posts, setPosts] = useState([]);
  //   {
  //     id: 1,
  //     title: 'First Post',
  //     dateTime:'july 20, 2015 at 12:00 PM',
  //     content: 'This is the first post content.'
  //   },
  //   {
  //     id: 2,
  //     title: 'Second Post',
  //     dateTime:'july 20, 2015 at 12:00 PM',
  //     content: 'This is the second post content.'
  //   },
  //   {
  //     id: 3,
  //     title: 'Third Post',
  //     dateTime:'july 2, 2015 at 12:12 PM',
  //     content: 'This is the third post content.'
  //   },
  // ]);

  //^ search input fields state
  const [search, setSearch] = useState("");

  useEffect(() => {
    // for search input fields.
    // Anything search in search bar that time load the search and posts
  }, [posts, search]);

  //^ filter posts based on search input
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  //^ use effect for first time load the post data
  useEffect(() => {
    // fetch data from API
    const fetchData = async () => {
      try {
        const response = await api.get("/posts"); //why mention posts here because we created json object that name is posts.that data is get.
        setPosts(response.data); //setposts that response data.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //^ state for new post title form
  const [newPostTitle, setNewPostTitle] = useState("");
  // state for new post Content form
  const [newPostContent, setNewPostContent] = useState("");
  // state for navigated paths
  const navigate = useNavigate("");

  //^ handle new post form submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create new post object
    const newPost = {
      id: Date.now(), // (or) use this for unique id: const id = posts.length ? posts[posts.length - 1].id+1 : 1
      title: newPostTitle,
      dateTime: format(new Date(), "MMMM dd, yyyy pp"), // (or) new Date().toLocaleString(), // take date and time in local device  when creating new post
      content: newPostContent,
    };

    // send new post data to API
    const postDataToApi = await api.post("/posts", newPost); // mention the json object name or path and which data to send to API server when creating new post.
    // try and catch for errors handling.
    try {
      // add new post to posts array
      setPosts([...posts, postDataToApi.data]);
      // reset form or clear input fields
      setNewPostTitle("");
      setNewPostContent("");
      // go back to home page
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // //^ (use this or use EditPost component logic) for click the edit button set the Previous on title and content in input fields
  // const handleEditClick = (id) => {
  //   const postIndex = posts.findIndex((post) => post.id === id);
  //   if (postIndex !== -1) {
  //     setEditPostTitle(posts[postIndex].title);
  //     setEditPostContent(posts[postIndex].content);
  //   }
  // };

 
  //^ state for edited post title and content
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostContent, setEditPostContent] = useState("");

  //^ edit post btn functionality to save changes
  const handleEdit = async (id, e) => {
    e.preventDefault(); // prevent default action

    // for prevent white spaces input field and trim whitespace
    const trimmedTitle = editPostTitle.trim();
    const trimmedContent = editPostContent.trim();
    // Continue with the rest of the code
    if (trimmedTitle && trimmedContent) { //trimmedTitle and trimmedContent true then exclude this logics
      // edit post
      const editedPost = {
        id: id,
        title: trimmedTitle,
        dateTime: format(new Date(), "MMMM dd, yyyy pp"), // (or) new Date().toLocaleString(), // take date and time in local device  when creating new post
        content: trimmedContent,
      };
      try {
        const updateEditPost = await api.put(`/posts/${id}`, editedPost);
        //  edited post add to posts array.
        // using map function for updating edit post array.which post is edited to posts array.
        setPosts(
          posts.map((post) =>
            post.id === id ? { ...updateEditPost.data } : post
          )
        );

        // reset form or clear input fields
        setEditPostTitle("");
        setEditPostContent("");
        // go back to home page
        navigate("/");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  //^ delete post btn function
  const handleDelete = async (id) => {
    // send delete request to API
    await api.delete(`/posts/${id}`); // mention the id because navigate post.
    // try and catch for errors handling.
    try {
      // filter posts array excluding the post with given id
      const deletePosts = posts.filter((post) => post.id !== id);

      // update state with new array
      setPosts(deletePosts);
      // go back to home page
      // navigate('/');
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // render
  return (
    <div className="App">
      <Header title="Thoughts Media" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home posts={filteredPosts.reverse()} /> // reverse for recently added posts shown in the first.
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/post">
          <Route
            index
            element={
              <NewPost
                handleSubmit={handleSubmit}
                newPostTitle={newPostTitle}
                setNewPostTitle={setNewPostTitle}
                newPostContent={newPostContent}
                setNewPostContent={setNewPostContent}
              />
            }
          />

          <Route
            path="/post/:id"
            element={
              <PostPage
                posts={posts}
                handleDelete={handleDelete}
                // handleEditClick={handleEditClick}
              />
            }
          />

          <Route
            path="/post/edit/:id"
            element={
              <EditPost
                editPostTitle={editPostTitle}
                setEditPostTitle={setEditPostTitle}
                editPostContent={editPostContent}
                setEditPostContent={setEditPostContent}
                handleEdit={handleEdit}
                posts={posts}
              />
            }
          />
        </Route>

        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
