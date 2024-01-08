import { TailSpin } from "react-loader-spinner";
import  styles  from "./loader.module.css";

function Loader({title}){

    return(
        <div className={styles.loadWrapper} >
            <h2>Loading { title}</h2>
            <TailSpin
                height={80}
                width={80}
                radius={1}
                color={"#3861fb"}
            />
        </div>
    );
}
export default Loader;