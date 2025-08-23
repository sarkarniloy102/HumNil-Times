import { IoMdClose } from "react-icons/io";

const Model = ({ isModelOpen, closeModel }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center 
         ${isModelOpen ? "" : "hidden"}`}>
            <div className="">
                <div className="bg-teal-950 text-center p-10 lg:w-[500px] rounded shadow-md">
                    {/* content */}
                    <h2 className="text-xl font-semibold mb-4 mt-2 uppercase">please login here!</h2>
                    <form className="px-4 space-y-4 mb-4">
                        {/* email */}
                        <div>
                            <input 
                            type="email" name="email" id="email" placeholder="example@gmail.com"
                             className="w-full rounded-md shadow-xl outline-none bg-teal-900 px-5 py-3"/>
                        </div>
                        {/* password */}
                        <div>
                            <input 
                            type="password" name="password"
                            id="password" placeholder="type your password"
                             className="w-full rounded-md shadow-xl outline-none bg-teal-900 px-5 py-3"/>
                        </div>
                        {/* submit */}
                        <div>
                            <input type="submit" value="Log In" className="mt-3 hover:bg-teal-800 rounded-md cursor-pointer font-medium shadow-lg px-8 py-3" />
                        </div>
                    </form>

                    {/* modal close */}
                    <button onClick={closeModel}
                     className="mt-3 hover:bg-teal-800 rounded-md cursor-pointer font-medium shadow-lg px-8 py-3">
                        Close <IoMdClose className="inline-flex items-center w-7 h-7" />
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Model;