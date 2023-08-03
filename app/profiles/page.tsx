import UserCard from "./components/UserCard";
import getCurrentUser from "../actions/getCurrentUser";
const profile = async () => {
    const  currentUser  = await getCurrentUser();

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
                <UserCard name={currentUser?.name as string} />
            </div>
        </div>
    );
}

export default profile;
