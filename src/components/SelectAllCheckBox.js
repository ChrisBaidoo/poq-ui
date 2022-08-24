import React from 'react';
import { Form } from "react-bootstrap";

const SelectAllCheckBox = ({ handleSelectAll, isSelected, hasProducts }) => {
    return (
        <div className="selectAllCheckbox">
            {hasProducts && (<Form>
                <Form.Group controlId="formBasicCheckbox">

                    <Form.Check
                        className="checkBox"
                        type="checkbox"
                        id="selectAll"
                        checked={isSelected}
                        onChange={handleSelectAll}
                    />
                    Select All
                  </Form.Group>
            </Form>)}

        </div>
    );
}

export default SelectAllCheckBox;