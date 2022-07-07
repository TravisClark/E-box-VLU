import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Requests from "../../api/Requests";
import useHttpClient from "../../hooks/http-hook";
import { questionActions } from "../../store/question-slice";
import selectStyles from "../UI/Select.module.css";
export const QuestionType = ({selected}) => {
  const [options, setOptions] = useState([]);
  const { sendRequest } = useHttpClient();
  const {selectedType} = useSelector((state) => state.question)
  const dispatch = useDispatch();

  const onChangeHandler = (input)=>{
    dispatch(questionActions.getSelected(input.target.value));
  }

  useEffect(() => {
    const request = async () => {
      try {
        const response = await sendRequest(Requests.fetchQuestionTypes);
        setOptions(response.map(res => <option value={res.type_name} key={res.id_type}>{res.type_name}</option>));
        dispatch(questionActions.getSelected(selected ? selected : response[0].type_name))
      } catch (error) {}
    };
    request();
  }, [sendRequest, dispatch, selected]);
  return (
    <select
      value={selectedType}
      onChange={(e) => onChangeHandler(e)}
      className={`w-fit px-4 py-2 rounded-md ${selectStyles} outline-none`}
    >
      {options}
    </select>
  );
};
