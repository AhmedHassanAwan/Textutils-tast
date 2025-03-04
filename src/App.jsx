

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
        padding: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '900px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #e6e6e6',
    },
    heading: {
        color: '#222',
        fontSize: '26px',
        marginBottom: '20px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        letterSpacing: '0.5px',
        borderBottom: '2px solid #007bff',
        display: 'inline-block',
        paddingBottom: '5px',
    },
    textarea: {
        width: '100%',
        height: '150px',
        padding: '12px',
        fontSize: '16px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        marginBottom: '15px',
        resize: 'none',
        outline: 'none',
        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)',
        // backgroundColor: '#f7f7f7',
        backgroundColor : "#ffff",
        color: '#333',
    },
    paragraph: {
        fontSize: '18px',
        margin: '15px 0',
        fontWeight: '500',
        color: '#444',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginTop: '15px',
    },
    button: {
        padding: '12px 20px',
        fontSize: '14px',
        cursor: 'pointer',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        border: 'none',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        backgroundImage: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: '#fff',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
    },
    buttonHover: {
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    }
};


export default Home;
