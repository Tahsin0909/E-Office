import './SharedBtn.css'
// eslint-disable-next-line react/prop-types
const SharedBtn = ({ text }) => {
    return (
        <button className="cssbuttons-io-button">
            {text}
            <div className="icon">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" d="M5 12h14m-7 7V5" />
                </svg>

            </div>
        </button>

    );
};

export default SharedBtn;