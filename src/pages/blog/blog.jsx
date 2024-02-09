import { useState, useEffect } from "react";
import Loader from "../../components/loader/loader";
import { getAllBlogs } from "../../api/internal";
import styles from "./blog.module.css";

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        (async function getAllBlogsApiCall() {
            const response = await getAllBlogs();

            if (response.status === 200) {
                setBlogs(response.data.blog);
            }
        })();
        //default state
        setBlogs([]);
    }, []);

    if (blogs.length === 0) {
        return (<Loader text='blogs' />);
    }

    return (
        <div className={styles.blogWrapper}>
            {blogs.map((blog) => (
                <div key={blog._id} className={styles.blog}>
                    <h1>{blog.title}</h1>
                    <img src={blog.photo} alt="" />
                    <p>{blog.content}</p>
                </div>
            )
            )}
        </div>
    );
}

export default Blog;