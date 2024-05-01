import './SharedBtn.css'
// eslint-disable-next-line react/prop-types
const SharedBtn = ({ text }) => {
    return (
        <div>
            <button className="cssbuttons-io-button" onClick={() => document.getElementById('my_modal_1').showModal()}>
                {text}
                <div className="icon">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" d="M5 12h14m-7 7V5" />
                    </svg>

                </div>
            </button>
            {/* /modal  */}
            <dialog id="my_modal_1">
                <div
                    className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                    <div className="w-full max-w-lg shadow-lg rounded-md  relative">
                        <div className="container">
                            <div className='flex items-center '>
                                <div className="heading flex-grow">{text}</div>
                                <button className='text-xl ' onClick={() => document.getElementById('my_modal_1').close()}> x </button>
                            </div>
                            <form className="form" action="">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className="input"
                                    required=""
                                />
                                <input
                                    placeholder="Role"
                                    type="text"
                                    className="input"
                                    required=""
                                />
                                <input
                                    placeholder="Salary"
                                    type="text"
                                    className="input"
                                    required=""
                                />
                                <input
                                    placeholder="Category"
                                    type="text"
                                    className="input"
                                    required=""
                                />
                                <input value={text} type="submit" className="login-button" />
                            </form>
                            <span className="agreement"><a href="#">Powered By E-Office</a></span>
                        </div>

                    </div>
                </div>
            </dialog>
        </div>


    );
};

export default SharedBtn;