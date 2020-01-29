import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const TaskListRow = (props) => {
    return (
        <div>
            <BootstrapTable data={props.data} striped={true}>
                <TableHeaderColumn isKey={true} dataField='id'>Task ID</TableHeaderColumn>
                <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='status'>Current Status</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
}

export default TaskListRow;
