import { useState } from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import Navbar from "../../Navbar/Navbar";
import { useSelector } from "react-redux";

const SendNotification = () => {
  const currentTheme = useSelector((state) => state.theme.theme);

  const [allUserAndCompany, setAllUserAndCompany] = useState(false);
  const [selectUserAndCompany, setSelectedUserAndCompany] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [selectedForm ,setSelectedForm] = useState({
userType :true
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectedFormChange = (e) => {
    const { name, value } = e.target;
    setSelectedForm({
      ...selectedForm,
      [name]: value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <LeftSideBar />
        <div className="flex flex-col lg:ml-10 w-full lg:w-[1000px] gap-3">
          <div className="para">
            <p className={`underline text-xl ${currentTheme === "dark" ? "text-white" : "text-black"}`}>
              Show Notification
            </p>
          </div>
          <div className="flex w-[380px] mx-auto">
            <div className="w-full">
              <ul className="flex flex-col gap-3">
                <li>
                  <div
                    className={`w-full flex justify-between ${currentTheme === "dark" ? "text-white" : "text-black"} border-2 items-center gap-3 p-2 cursor-pointer`}
                    onClick={() => setAllUserAndCompany(!allUserAndCompany)}>
                    <p>All registered users and companies</p>

                    <span
                      className={`text-2xl transition-transform duration-300 ${allUserAndCompany ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      ^
                    </span>
                  </div>
                  {allUserAndCompany &&
                    <div className={`w-full ${currentTheme === "dark" ? "bg-[#404040] text-white" : "bg-white"} border p-6 shadow-lg rounded-lg `}>
                      <h2 className="font-bold text-center">All Users & Companies</h2>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block  font-medium">Title</label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                            className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29] ${currentTheme === "dark" ? "text-white bg-[#404040]" : "text-black bg:white"}`} 
                            required
                          />
                        </div>

                        <div>
                          <label className="block  font-medium">Body</label>
                          <input
                            name="body"
                            value={formData.body}
                            onChange={handleChange}
                            placeholder="Enter body text"
                            className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29] ${currentTheme === "dark" ? "text-white bg-[#404040]" : "text-black bg:white"}`} 
                            rows="4"
                            required
                          ></input>
                        </div>

                        <button
                          type="submit"
                          className={`w-full px-4 py-2 rounded  ${currentTheme === 'dark' ? 'text-white bg-[#404040]' : 'text-black bg-[#F0FFF8]'} border border-gray-300`}
                          >
                          Send Notification
                        </button>
                      </form>
                    </div>
                    }
                </li>


                <li>
                  <div
                    className={`w-full flex justify-between ${currentTheme === "dark" ? "text-white" : "text-black"} border-2 items-center gap-3 p-2 cursor-pointer`}
                    onClick={() => setSelectedUserAndCompany(!selectUserAndCompany)}
                  >
                    <p>Selected registered users and companies</p>
                    <span
                      className={`text-2xl transition-transform duration-300 ${selectUserAndCompany ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      ^
                    </span>
                  </div>

                  {selectUserAndCompany && (
                   <div className={`w-full ${currentTheme === "dark" ? "bg-[#404040] text-white" : "bg-white"} border p-6 shadow-lg rounded-lg `}>
                   <h2 className="font-bold text-center">Selected Users & Companies</h2>
                   <div className="w-full flex items-center mt-6 lg:mt-5">
                   <label className="flex items-center mr-4">
  <input
    type="radio"
    name="userType"
    value="users"
    checked={selectedForm.userType === "users"}
    onChange={handleSelectedFormChange}
    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
  />
  <span className="ml-2 text-sm font-medium">Users</span>
</label>

<label className="flex items-center">
  <input
    type="radio"
    name="userType"
    value="companies"
    checked={selectedForm.userType === "companies"}
    onChange={handleSelectedFormChange}
    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
  />
  <span className="ml-2 text-sm font-medium">Companies</span>
</label>
                    </div>
                 </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;
