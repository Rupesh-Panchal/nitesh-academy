import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/ManageAchievers.css";

const ManageAchievers = () => {

  const [achievers, setAchievers] = useState([]);

  /* Fetch Achievers */

  const fetchAchievers = async () => {

    try {

      const res = await axios.get("http://localhost:5000/api/achievers");

      setAchievers(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchAchievers();

  }, []);

  /* Delete Achiever */

  const deleteAchiever = async (id) => {

    if (!window.confirm("Delete this achiever?")) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/achievers/delete/${id}`
      );

      alert("Achiever Deleted");

      fetchAchievers();

    } catch (error) {

      alert("Delete failed");

    }

  };

  return (

    <div className="managePage">

      <h2>Manage Achievers</h2>

      <div className="tableContainer">

        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Score</th>
              <th>Board</th>
              <th>Section</th>
              <th>Rank</th>
              <th>Image</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {achievers.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.name}</td>

                <td>{item.score}</td>

                <td>{item.board}</td>

                <td>{item.section}</td>

                <td>{item.rank_text}</td>

                <td>
                  <img src={item.image} alt="" className="tableImg" />
                </td>

                <td>

                  <button
                    className="deleteBtn"
                    onClick={() => deleteAchiever(item.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ManageAchievers;