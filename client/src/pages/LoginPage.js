export default function LoginPage(){
    return(
        <div>
            <form className="login">
            <h3> Login</h3>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}