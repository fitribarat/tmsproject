import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import CardDone from "../Card/CardDone";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          {/* <span>{props.board?.cards?.length || 0}</span> */}
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="board_cards custom-scroll">
        <table className="table_cards">
          <thead className="thead_title">
            <tr>
              <th> Inprogress </th>
              <th className="thdone"> Done </th>
            </tr>
          </thead>
          <tbody className="tbody_cards">
            <tr>
              <td className="td_cards">
                {props.board?.cards?.map((item) => (
                  <Card
                    key={item.id}
                    card={item}
                    boardId={props.board.id}
                    removeCard={props.removeCard}
                    dragEntered={props.dragEntered}
                    dragEnded={props.dragEnded}
                    updateCard={props.updateCard}
                  />
                ))}
              </td>
              <td>
                {props.board?.cards?.map((item) => (
                  <CardDone
                    key={item.id}
                    card={item}
                    boardId={props.board.id}
                    removeCard={props.removeCard}
                    dragEntered={props.dragEntered}
                    dragEnded={props.dragEnded}
                    updateCard={props.updateCard}
                  />
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <Editable
          text="+ Tambah Sub Task"
          placeholder="Enter Sub Task"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
