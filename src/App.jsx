

import React, { useState } from 'react';

function Home() {
    const [count, setCount] = useState("");

    const clear = () => {
        setCount("");
    };

    return (
        <>
      

        <div style={styles.container}>
            <h1 style={styles.heading}>Enter the text to anaylize below</h1>

            <textarea
                onChange={(e) => setCount(e.target.value)}
                value={count}
                placeholder='Enter text...'
                style={styles.textarea}
            ></textarea>

            <p style={styles.paragraph}>Total Alphabets = <b>{count.length}</b></p>

            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => setCount(count.toLocaleUpperCase())}>Uppercase</button>
                <button style={styles.button} onClick={() => setCount(count.toLowerCase())}>LowerCase</button>
                <button style={styles.button} onClick={clear}>Clear Text</button>
                <button style={styles.button} onClick={() => setCount(count.replaceAll(' ', ''))}>Remove Spaces</button>
               
            </div>
        </div>
        </>

    );
}

const styles = {
    container: {
      
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#0000',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        width: '60%',
        margin: '30px auto',
        
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        color: '#333',
        marginBottom: '15px',
    },
    textarea: {
        width: '80%',
        height: '100px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        marginBottom: '15px',
    },
    paragraph: {
        fontSize: '18px',
        margin: '10px 0',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
    },
    button: {
        padding: '10px 15px',
        fontSize: '14px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        transition: '0.3s',
    }
};

export default Home;
