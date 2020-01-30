import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const TaskListRow = (props) => {
    const columns = [
        {
            dataField: 'id',
            text: 'Task ID',
            sort: true,
            headerStyle: { width:"20%" },
        }, {
            dataField: 'title',
            text: 'Title',
            sort: true,
            headerStyle: { width:"50%" },
        }, {
            dataField: 'status',
            text: 'Status',
            sort: true,
            headerStyle: { width:"50%" },
        }
    ];

    return (
        <div className="card">
            <div className="card-body">
                <BootstrapTable data={props.data} columns={columns} keyField="id" classes="table table-dark" striped={true} />
            </div>
        </div>
    );
}

export default TaskListRow;
