export const cards = [
    {
        "id": 1,
        "label": "Integration with React",
        "status": 1,
        "cover": "#65D3B3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "start_date": "2021-01-04T23:00:00.000Z",
        "end_date": "2021-01-14T23:00:00.000Z",
        "progress": 25,
        "users": [
            1,
            2,
            3,
            4
        ],
        "sprint": "1.0",
        "column": "backlog",
        "type": "feature"
    },
    {
        "id": 2,
        "label": "Archive the cards/boards ",
        "status": 2,
        "cover": "#FFC975",
        "start_date": "2021-01-04T23:00:00.000Z",
        "end_date": "2021-01-14T23:00:00.000Z",
        "sprint": "1.0",
        "column": "backlog",
        "type": "feature"
    },
    {
        "label": "Searching and filtering",
        "status": 1,
        "cover": "#65D3B3",
        "start_date": "2021-01-04T23:00:00.000Z",
        "sprint": "1.2",
        "column": "backlog",
        "type": "task"
    },
    {
        "label": "Set the tasks priorities",
        "status": 2,
        "cover": "#58C3FE",
        "sprint": "1.2",
        "column": "inprogress",
        "type": "feature"
    },
    {
        "label": "Custom icons",
        "status": 2,
        "cover": "#58C3FE",
        "sprint": "1.2",
        "column": "inprogress",
        "type": "task"
    },
    {
        "label": "Integration with Gantt",
        "status": 1,
        "cover": "#58C3FE",
        "sprint": "1.0",
        "column": "inprogress",
        "type": "task"
    },
    {
        "label": "Drag and drop",
        "status": 3,
        "cover": "#58C3FE",
        "sprint": "1.3",
        "column": "testing",
        "type": "feature"
    },
    {
        "label": "Adding images",
        "status": 1,
        "cover": "#58C3FE",
        "sprint": "1.2",
        "column": "testing",
        "type": "task"
    },
    {
        "label": "Create cards from the UI and from api",
        "status": 1,
        "cover": "#58C3FE",
        "sprint": "1.2",
        "column": "testing",
        "type": "feature"
    },
    {
        "label": "Draw swimlanes",
        "status": 2,
        "cover": "#58C3FE",
        "sprint": "1.0",
        "column": "done",
        "type": "feature"
    },
    {
        "label": "Progress bar",
        "status": 2,
        "cover": "#58C3FE",
        "sprint": "1.0",
        "column": "done",
        "type": "task"
    },
    {
        "label": "label3",
        "status": 1,
        "cover": "#58C3FE",
        "start_date": "2021-01-04T23:00:00.000Z",
        "sprint": "sprint",
        "column": "backlog",
        "team": "team2"
    },
    {
        "id": "uid1234",
        "label": "label3",
        "status": 1,
        "cover": "#58C3FE",
        "start_date": "2021-01-04T23:00:00.000Z",
        "sprint": "sprint",
        "column": "backlog",
        "team": "team2"
    },
    {
        "id": "4",
        "label": "label4",
        "status": 1,
        "cover": "#58C3FE",
        "start_date": "2021-01-04T23:00:00.000Z",
        "sprint": "sprint",
        "column": "backlog",
        "team": "team2"
    }
]

export const columns = [
    {
        "label": "Backlog",
        "id": "backlog"
    },
    {
        "label": "In progress",
        "id": "inprogress"
    },
    {
        "label": "Testing",
        "id": "testing"
    },
    {
        "label": "Done",
        "id": "done"
    }
]

export const rows = [
    {
        "label": "Feature",
        "id": "feature"
    },
    {
        "label": "Task",
        "id": "task"
    }
]