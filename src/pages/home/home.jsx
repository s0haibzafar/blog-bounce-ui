import { useState, useEffect } from "react";
import { getNews } from "../../api/external";
import styles from "./home.module.css";
import Loader from "../../components/loader/loader";

function Home() {
    const [articals, setArticals] = useState([]);

    useEffect(() => {
        (async function newsApiCall() {
            const response = await getNews();
            setArticals(response);
        })();

        //cleanup function 
        setArticals([])
    }, []);

    const handleCardClick = (articleUrl) => {
        window.open(articleUrl, "_blank")
    }

    if (articals.length === 0) {
        return <Loader title="homepage" />
    }

    return (
        <>
            <div className={styles.header} >Latest Articles</div>
            <div className={styles.grid} >
                {articals.map((item) => (
                    <div
                        className={styles.card}
                        key={item.url}
                        onClick={() => handleCardClick(item.url)}
                    >
                        <img src={item.urlToImage} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;