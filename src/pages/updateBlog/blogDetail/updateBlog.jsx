import { useState, useEffect } from "react";
import { getBlogById, updateBlog } from "../../../api/internal";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./updateBlog.module.css"
import { useSelector } from 'react-redux';
import TextInput from "../../../components/textInput/textInput";


function UpdateBlog() {

    const navigate = useNavigate();

    const params = useParams();
    const blogId = params.id;


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('');



    useEffect(() => {
        async function getBlogDetails() {

            const response = await getBlogById(blogId);

            if (response.status === 200) {
                setTitle(response.data.blog.title);
                setContent(response.data.blog.content);
                setPhoto(response.data.blog.photo);
            }
        }
        getBlogDetails();
        //default state

    }, []);

    const getPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        }
    }

    const author = useSelector(state=>state.user._id);
    const updateHandler = async () => {
        

        //if photo is change then send other wise not send
         let data;
          if(photo.includes('https')){
            const data = {
                author, title, content, blogId
            }

          }else{
             data = {
                author, title, content, photo, blogId
            }
          }

        const response = await updateBlog(data);

        if (response.status === 200) {
            navigate('/ ');
        }
    }


    return (
        <div className={styles.wrapper} >
            <div className={styles.header} >Edit your Blog!</div>
            <TextInput
                type="text"
                name="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '60%' }}
            />
            <textarea
                className={styles.content}
                placeholder="your content goes here..."
                maxLength={400}
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.photoPrompt}>
                <p>Choose a photo</p>
                <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/jpg, image/jpeg, image/png "
                    onChange={getPhoto}
                />
                <img src={photo} alt="gml" width={150} height={150} /> 
            </div>
            <button
                className={styles.submit}
                onClick={updateHandler}
            >Update</button>

        </div>

    );
}

export default UpdateBlog;