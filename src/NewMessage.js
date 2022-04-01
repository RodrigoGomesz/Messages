export function NewMessage({newMessage, sendNewMessage, setNewMessage, update}) {
    return (
        <div className="card form-container">
            <form 
                className="new-message-form" 
                id="new-message-form" 
                onSubmit={
                    (e) => {
                    e.preventDefault();
                    sendNewMessage(newMessage);
                    setNewMessage("");
                    setTimeout(() => update(), 100);
                    }
                }
            >
                <textarea 
                    className="new-message"
                    form="new-message-form"
                    maxLength="255"
                    name="message"
                    value={ newMessage || "" }
                    rows="5"
                    placeholder="New message..."
                    onChange={ (e) => setNewMessage(e.target.value) }
                    required
                />
                <input className="send-btn" type="submit" value="Send"/>
            </form>
        </div>
    )
} 
