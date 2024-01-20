import { useState, useEffect } from "react";
import Loader from "../../components/loader/loader";
import styles from './cryptocoin.module.css';
import { getCrypto } from "../../api/external";

function Cryptocoin() {

    const [data, setDatas] = useState([]);

    useEffect(() => {
        //IIFE : immediately invoked function expression
        (async function cryptoApiCall() {
            let response = await getCrypto();
            setDatas(response);
        })();

        //clean up
        setDatas([]);

    }, []);

    if (data.length === 0) {
        return (<Loader text="cryptocurrencies" />)
    }

    return (
        <table className={styles.table}>
            <thead >
                <tr className={styles.head}>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>24h</th>
                </tr>
            </thead>
            <tbody>
                {data.map((coin) => (
                    <tr key={coin.id}  className={styles.tableRow} >x
                     <td>{coin.market_cap_rank}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Cryptocoin;