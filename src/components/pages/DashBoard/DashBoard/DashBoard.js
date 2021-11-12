import React from "react";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dashboard-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 bg-info c-bg">
            <nav class="nav flex-column">
              <a class="nav-link active" aria-current="page" href="/">
                Active
              </a>
              <a class="nav-link" href="/">
                Link
              </a>
              <a class="nav-link" href="/">
                Link
              </a>
              <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">
                Disabled
              </a>
            </nav>
          </div>

          <div className="col-md-9">
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, repellendus dolore excepturi nam
              nemo velit soluta commodi expedita saepe dolor? Aspernatur aperiam obcaecati, quod accusamus neque
              consectetur harum laudantium optio ducimus architecto tempore earum ullam, consequatur officiis
              exercitationem rerum ex totam iste at mollitia nobis deleniti sapiente. Ab sequi quaerat doloremque
              porro, cum commodi rem tempora, deleniti natus, dicta omnis est aperiam consequuntur temporibus?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
