import moment from "moment/moment";

const Navbar = () => {
    return (
        <div className="bg-slate-200 p-2 flex items-center justify-between">
            <p className=" font-bold">{moment().format('MMMM Do YYYY, h:mm a')}</p>
            <p className="font-bold text-lg text-blue-700" >My IT Solution</p>
            <div className="flex gap-2 items-center justify-end">
                <p className="font-bold">Admin</p>
                <img className="w-10 rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1714477209~exp=1714477809~hmac=e90359a83be562109d76b3acc242103578a8da0f5b4c38565f456296c4070c9b" alt="admin icon" />
            </div>
        </div>
    );
};

export default Navbar;