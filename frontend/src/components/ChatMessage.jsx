export default function ChatMessage({
    role,
    children
}) {
    return (
        <div className={`message ${role}`}>
            <div className="avatar">
                {
                    role==="assistant"
                    ?
                    "🤖"
                    :
                    "👤"
                }
            </div>
            <div className="bubble">
                {children}
            </div>
        </div>
    );
}