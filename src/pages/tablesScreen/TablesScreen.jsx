import React, { useState, useEffect } from 'react';
import './TablesScreen.css';
import Sidepanel from '../../components/sidepannel/Sidepanel';
import Apptoolbar from '../../components/apptoolbar/Apptoolbar';
import CustomButton from '../../components/custombtn/CustomButton';
import axios from 'axios';
import esther from "../../assets/images/Esthera.png";

const API_URL = 'https://67b9629851192bd378dd4402.mockapi.io/authorsTable'; // Example API

function TablesScreen() {
    const [users, setUsers] = useState([]);
    const [flag, setflag] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [edit, setedit] = useState(false);

    const [userinfo, setUserinfo] = useState({
        image: "",
        name: "",
        email: "",
        function: "",
        department: "",
        status: false,
        date: "",
    }
    )

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserinfo((cur) => {
            return {
                ...cur,
                [name]: type === "checkbox" ? checked : value,
            }
        })
        console.log("dynamiv user information", userinfo);
    }

    //post request
    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            const response = await axios.post(API_URL, { ...userinfo });
            console.log('post response ', response);
            if (response.status === 201) {
                setUserinfo({
                    image: "",
                    name: "",
                    email: "",
                    function: "",
                    department: "",
                    status: false,
                    date: "",
                });

                setRefresh(prev => !prev); // Toggle `refresh` to trigger useEffect
                setflag(false)
            }
        }
        catch (err) {
            console.log(err);

        }
        console.log(userinfo)
    }

    const putReq = async (id) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, { ...userinfo });
            console.log("put rresponse------", response);

            if (response.status === 200) {
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === id ? response.data : user
                    )
                );

                // Reset form fields
                setUserinfo({
                    image: "",
                    name: "",
                    email: "",
                    function: "",
                    department: "",
                    status: false,
                    date: "",
                });

                setedit(false);  // Exit edit mode
                setflag(false);  // Hide form
                setRefresh(prev => !prev);  // Refresh data
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteReq = async (id) => {
        try {
            console.log('delete________________');

            await axios.delete(`${API_URL}/${id}`);
            setRefresh(prev => !prev); // Toggle `refresh` to trigger useEffect

        }
        catch (error) {
            console.error("Error deleting post:", error);

        }
    }

    const handleEdit = (id) => {
        const userToEdit = users.find((userdata) => userdata.id === id); // Find the user by ID
        if (userToEdit) {
            setUserinfo(userToEdit); // Update state with the selected user
            setedit(true);
            setflag(true);
        }
    };
    useEffect(() => {
        console.log(flag);
    }, [flag]);
    // Fetch data from API

    useEffect(() => {
        fetchData();
    }, [refresh]);

    return (
        <div className="tables-container">
            <div className="sidepanel">
                <Sidepanel />
            </div>
            <div className="apptoolbar">
                <Apptoolbar />
            </div>
            <div className="tables-screen-content">
                <CustomButton text="Add user" color="#4FD1C5" onClick={() => { setflag(!flag) }} />



                {flag &&
                    <div className='form-container'>
                        <h2>Add Author</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            edit ? putReq(userinfo.id) : handleSubmit();
                        }}>

                            <label>
                                Image Url:
                                <input type="text" name="image" value={userinfo.image} onChange={handleChange} required />
                            </label>
                            <label>
                                Name:
                                <input type="text" name="name" value={userinfo.name} onChange={handleChange} required />
                            </label>

                            <label>
                                Email:
                                <input type="email" name="email" value={userinfo.email} onChange={handleChange} required />
                            </label>

                            <label>
                                Function:
                                <input type="text" name="function" value={userinfo.function} onChange={handleChange} required />
                            </label>

                            <label>
                                Department:
                                <input type="text" name="department" value={userinfo.department} onChange={handleChange} required />
                            </label>

                            <label className="checkbox-label">
                                Status:
                                <input type="checkbox" name="status" checked={userinfo.status} onChange={handleChange} />
                            </label>

                            <label>
                                Date:
                                <input
                                    type="date"
                                    name="date"
                                    value={
                                        userinfo.date
                                            ? /^\d{4}-\d{2}-\d{2}$/.test(userinfo.date)  // Check if already in YYYY-MM-DD format
                                                ? userinfo.date  // Use it directly
                                                : new Date(userinfo.date).toISOString().split("T")[0]  // Convert if needed
                                            : ""
                                    }
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <button className="submitbtn" type="submit" style={{ backgroundColor: edit ? "#4FD1C5" : "" }}> {edit ? "Update" : "Submit"}</button>
                        </form>


                    </div>



                }










                <div className="first-card">
                    <h3 className="heading">Authors Table</h3>
                    <h4>AUTHOR</h4>

                    <table>
                        <thead>
                            <tr>
                                <th>AUTHOR</th>
                                <th>FUNCTION</th>
                                <th>STATUS</th>
                                <th>EMPLOYED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <React.Fragment key={user.id}>
                                    <tr>
                                        <td colSpan="5">
                                            <hr className="custom-style" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="author-box">
                                            <img
                                                className="profilepic"
                                                src={esther}
                                                alt="User Profile"
                                                onError={(e) => e.target.src = { esther }} // Fallback image
                                            />                                         <div className="author-Name-box">
                                                <p className="fullname">{user.name}</p>
                                                <p className="email">{user.email}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="function">{user.function}</p>
                                            <p className="department">{user.department}</p>
                                        </td>
                                        <td>
                                            <CustomButton
                                                text={"Online"}
                                                color={user.status ? "#48BB78" : "#CBD5E0"}
                                                onClick={() => console.log('Status clicked')}
                                            />
                                        </td>
                                        <td>{new Date(user.date).toLocaleDateString('en-GB')}</td>
                                        <td >
                                            <div className='action'>
                                                <CustomButton text="Edit" color="#ed6c02 " onClick={() => handleEdit(user.id)} />
                                                <CustomButton text="Delete" color="#d32f2f" onClick={() => deleteReq(user.id)} />
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TablesScreen;
