export function NewMessage({newMessage, sendNewMessage, setNewMessage, update}) {
    return (
        <div className="form-container">
            <form 
                className="card new-message-form" 
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
                <div className="new-message">
                    <textarea 
                        form="new-message-form"
                        maxLength="255"
                        name="message"
                        value={ newMessage || "" }
                        rows="5"
                        placeholder="Nova mensagem..."
                        onChange={ (e) => setNewMessage(e.target.value) }
                        required
                    />
                </div>
                <input className="send-btn" type="submit" value="enviar"/>
            </form>
        </div>
    )
}