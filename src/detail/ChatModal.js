import React, {useState, useEffect, useRef} from 'react';

const ChatModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const chatBoxRef = useRef(null);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (inputMessage.trim() === '') return;

        const userMessage = {text: inputMessage, sender: 'user'};
        setMessages([...messages, userMessage]);
        setInputMessage('');

        let gptResponse = await fetch("http://localhost:8080/news/gpt?question=" + inputMessage, {
            method: "GET",
        });
        let gptResponseJson = await gptResponse.json();

        const gptResponseFin = {text: gptResponseJson['answer'], sender: 'gpt'};

        setMessages(prevMessages => [...prevMessages, gptResponseFin]);

        // setTimeout(() => {
        //     const gptResponse = {text: 'This is a simulated GPT response.', sender: 'gpt'};
        //     setMessages(prevMessages => [...prevMessages, gptResponse]);
        // }, 1000);
    };

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div style={styles.container}>
            <button onClick={toggleModal} style={styles.toggleButton}>
                {isOpen ? '' : ''}
            </button>
            {isOpen && (
                <div style={styles.modal}>
                    <div style={styles.chatBox} ref={chatBoxRef}>
                        {messages.map((message, index) => (
                            <div key={index} style={message.sender === 'user' ? styles.userMessage : styles.gptMessage}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            style={styles.input}
                        />
                        {/*<button onClick={handleSendMessage} style={styles.sendButton}>*/}
                        {/*    Send*/}
                        {/*</button>*/}
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
    },
    toggleButton: {
        padding: '30px 30px',
        backgroundColor: '#f88502',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 6px 3px rgba(0, 0, 0, 0.1)',
    },
    modal: {
        position: 'absolute',
        bottom: '70px',
        right: '0px',
        width: '600px',
        height: '800px',
        backgroundColor: 'white',
        // border: '1px solid #ccc',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 6px 3px rgba(0, 0, 0, 0.1)',
    },
    chatBox: {
        flex: 1,
        overflowY: 'auto',
        padding: '10px',
        whiteSpace: 'pre-wrap',
    },
    userMessage: {
        backgroundColor: '#e6f2ff',
        padding: '5px 10px',
        borderRadius: '10px',
        marginBottom: '5px',
        alignSelf: 'flex-end',
    },
    gptMessage: {
        backgroundColor: '#f0f0f0',
        padding: '5px 10px',
        borderRadius: '10px',
        marginBottom: '5px',
        alignSelf: 'flex-start',
    },
    inputContainer: {
        display: 'flex',
        padding: '10px',
    },
    input: {
        flex: 1,
        padding: '5px 10px',
        fontSize: '16px',
        height: '40px',
    },
    sendButton: {
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ChatModal;