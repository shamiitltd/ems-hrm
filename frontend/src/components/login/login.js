import './login.css';

const Login =()=>{
    return(
        <>
            <div className='text-center p-5'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6 col-lg-5'>
                        <img src='images/LoginImage.png' alt='shamiit_logo' className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-5'>
                        <section className='mb-4'>
                            <button className='btn btn-warning me-2'>Sign Up</button>
                            <button className='btn btn-light'>Sign In</button>
                        </section>
                        <section className='mb-4'>
                            <form>
                                <input type='email' name="Email" placeholder=" ✉️ Enter Email" className='form-control mb-2'/>
                                <input type='password' name="password" placeholder=" 🔑 Enter Password" className='form-control mb-2'/>
                            </form>
                        </section>
                        <section className='mb-4'>
                            <span className='d-flex justify-content-between align-items-center'>
                                <small className="me-5"><input type="checkbox" name="" id="check" /> <label htmlFor="check">Don't ask again</label></small>
                                <small>Forget password?</small>
                            </span>
                        </section>
                        <button className='btn btn-primary'>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;