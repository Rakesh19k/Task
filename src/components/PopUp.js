import React from 'react';
import "./CSS/PopUp.css";

function PopUp() {
    return (
        <div>
            <div class="container">
                <h2>Modal Example</h2>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
                </button>

                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Modal Heading</h4>

                            </div>

                            <div class="modal-body">

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PopUp
