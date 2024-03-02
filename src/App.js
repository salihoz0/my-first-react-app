/** @format */
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count > 15) {
            alert(`Ulaşabileceğiniz en yüksek sayı olan ${count}'e ulaştınız`);
        } else if (count === -15) {
            alert(`Ulaşabileceğiniz en düşük sayı olan ${count}'e ulaştınız`);
        }
    }, [count]);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
            }}
        >
            <h1>Sayıcı</h1>
            <h1>Şuanda sayı: {count} </h1>
            <button
                style={{ width: "100px" }}
                onClick={() => {
                    if (count < 15) {
                        setCount(count + 1);
                    }
                }}
            >
                Artır
            </button>
            <button
                style={{ width: "100px" }}
                onClick={() => {
                    if (count > -15) {
                        setCount(count - 1);
                    }
                }}
            >
                Azalt
            </button>
        </div>
    );
}

export default App;
