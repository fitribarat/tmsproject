import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal, User } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";

import "./CardDone.css";
import CardInfo from "./CardInfo/CardInfo";

function CardDone(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { id, title, date, tasks, labels } = props.card;

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (!date) return "";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Aprl",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
  };

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="carddone"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className="carddone_top">
          <div className="carddone_top_labels">
            {labels?.map((item, index) => (
              <label key={index} style={{ backgroundColor: "grey" }}>
                {item.text}
              </label>
            ))}
          </div>
          <div
            className="carddone_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board_dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p className="pdonecard" onClick={() => props.removeCard(props.boardId, id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="carddone_title">{title}</div>
        <div className="carddone_footer">
          {date && (
            <p className="carddone_footer_item">
              <Clock className="carddone_footer_icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="carddone_footer_item">
              <CheckSquare className="carddone_footer_icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
          <p className="carddone_footer_item">
            <User className="carddone_footer_icon" />
            FH
          </p>
        </div>
      </div>
    </>
  );
}

export default CardDone;
