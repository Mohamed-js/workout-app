import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { newRecord } from "../../Helper";
import { fetchUserRecords } from "../../actions";

const NewRecord = () => {
  const [exercise, setExercise] = useState();
  const [count, setCount] = useState(0);
  const [circle, setCircle] = useState();
  const [message, setMessage] = useState();
  const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("current_user"));

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchUserRecords(user.authentication_token));
    }
  }, []);

  const trackedMovements = useSelector((state) => state.user.trackedMovements);
  const options = [""];
  if (trackedMovements) {
    trackedMovements.forEach((movement) => {
      options.push({ name: movement.name, id: movement.id });
    });
  }

  const handleChoose = (e) => {
    setExercise(e.target.value);
  };

  const handleStart = (e) => {
    if (exercise) {
      setCircle(true);
      e.target.style.display = "none";
    }
  };

  const handleRec = async () => {
    setCircle(false);
    setCount(document.getElementById("circle").value);
    document.getElementById("start").style.display = "inline-block";
    const message = await newRecord(user.authentication_token, exercise, count);
    setMessage(message);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="container">
      {message && message.message && (
        <h4 className="alert-good">{message.message}</h4>
      )}
      <h4 className="grey">Choose the exercise:</h4>
      <div className="control-row">
        <select
          name="exercise"
          id="exercise"
          onChange={handleChoose}
          value={exercise}
        >
          {options.map((option) => (
            <option key={`${option.name}${option.id}`} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {circle && (
          <button
            type="button"
            id="rec"
            className="btn active rec"
            onClick={handleRec}
          >
            RECORD +
          </button>
        )}
      </div>

      <button
        type="button"
        id="start"
        className="btn start active v-bold"
        onClick={handleStart}
      >
        START
      </button>

      {circle && (
        <div className="range-container">
          <button type="button" id="circle" className="btn circle active">
            {count}
            <h6 className="m-0">Times</h6>
          </button>
          <input
            className="custom-select"
            type="range"
            defaultValue="0"
            min="0"
            max="100"
            onChange={handleCount}
          />
        </div>
      )}
    </div>
  );
};

export default NewRecord;
