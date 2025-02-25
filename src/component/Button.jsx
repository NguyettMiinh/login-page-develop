function Button({onClick}) {
    return (
        <div className="btn">
            <button onClick={onClick} className="sign-in-btn">Sign In</button>
        </div>
    );

}

export default Button;