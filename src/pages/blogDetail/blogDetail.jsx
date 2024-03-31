import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogById, deleteBlog, getCommentById, postComment } from "../../api/internal";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import styles from "./blogDetail.module.css"
import CommentList from "../../components/commentList/commentList";

function BlogDetail() {
    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const [ownsBlog, setOwnsBlog] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [reLoad, setReLoad] = useState(false);
    
    const navigate = new useNavigate();
    
    const params = useParams();
    const blogId = params.id;

    const username = useSelector(state=>state.user.username);
    const userId = useSelector(state=>state.user._id);


        useEffect(() => {
        async function getBlogDetails() {
            const commentResponse = await getCommentById(blogId);

            if (commentResponse.status === 200) {
                setComments(commentResponse.data.data);
            }
 
            const blogResponse = await getBlogById(blogId);

            if (blogResponse.status === 200) {
                //set owner ship
                setOwnsBlog(username === blogResponse.data.blog.authorUsername);
                setBlog(blogResponse.data.blog);
            }
        }
        getBlogDetails();
        //default state
        
    }, [reLoad]);


    const postCommentHandler = async ()=>{
        const   data = {
            author : userId,
            blog: blogId,
            content : newComment,
        }

        const response = await postComment(data);
        if(response.state===201){
            setNewComment('');
            setReLoad(!reLoad);

        }
    }

    const deleteBlogHandler =  async () =>{
        const response = await deleteBlog(blogId);
        if(response.state===200){
            navigate("/");
        }
    }


    if (blog.length === 0) {
        return (<Loader text='blog details' />);
    }

    return (
        <div className={styles.detailWrapper}>
            <div  className={styles.left}>
                <h1  className={styles.title} > {blog.title} </h1>
                <div className={styles.meta} >
                    <p  >@{blog.authorUsername + " on " + new Date(blog.createdAt).toDateString()}</p>
                </div>
                <div className={styles.photo} >
                    <img src={blog.photo} width={250} height={250} alt="" />
                </div>
                <p className={styles.content} >{blog.content}</p>
                {
                    ownsBlog && (
                        <div className={styles.controls} >
                            <button className={styles.editButton} onClick={()=>{navigate(`/blog/update/${blog._id}`)}} >Edit</button>
                            <button className={styles.deleteButton} onClick={deleteBlogHandler} >Delete</button>
                        </div>
                    )
                }
            </div>
            <div  className={styles.right}>
                <div className={styles.commentWrapper}>
                    <CommentList comments={comments} /> 
                    <div className={styles.postComment}>
                        <input 
                        className={styles.input}
                        placeholder="comment goes here..."
                        value={newComment}
                        onChange={(e)=> setNewComment(e.target.value)}
                          />
                        <button className={styles.postCommentButton} onClick={postCommentHandler} >Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;