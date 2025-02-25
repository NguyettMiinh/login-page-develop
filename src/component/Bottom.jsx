function Bottom() {
    return (
        <div className="bottom">
        <div className="left">
            <label className="custom-check">
                <input id="cb1" 
                    type="checkbox"
                    name="checkbox-checked"
                    />
                <span className="remember-me">Remember Me</span>
            </label>
          
        </div>
        <div className="right">
            <label><a href="#">Forgot password?</a></label>
        </div>
        
    </div>
    );
}

export default Bottom;