export const cards = [
    {
        "label": "Integration with React",
        "status": 1,
        "color": "#65D3B3",
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
        "column": 1,
        "type": 1,

    },
    {
        "label": "Archive the cards/boards ",
        "status": 2,
        "color": "#FFC975",
        "start_date": "2021-01-04T23:00:00.000Z",
        "end_date": "2021-01-14T23:00:00.000Z",
        "sprint": "1.0",
        "column": 1,
        "type": 1
    },
    {
        "label": "Searching and filtering",
        "status": 1,
        "color": "#65D3B3",
        "start_date": "2021-01-04T23:00:00.000Z",
        "sprint": "1.2",
        "column": 1,
        "type": 2
    },
    {
        "label": "Set the tasks priorities",
        "status": 2,
        "color": "#58C3FE",
        "sprint": "1.2",
        "column": 2,
        "type": 1,
        "attached": [
            {
                name: "demo.jpg",
                url: "demo.jpg",
                isCover: true,
            }
        ]
    },
    {
        "label": "Custom icons",
        "status": 2,
        "color": "#58C3FE",
        "sprint": "1.2",
        "column": 2,
        "type": 2
    },
    {
        "label": "Integration with Gantt",
        "status": 1,
        "color": "#58C3FE",
        "sprint": "1.0",
        "column": 2,
        "type": 2
    },
    {
        "label": "Drag and drop",
        "status": 3,
        "color": "#58C3FE",
        "sprint": "1.3",
        "column": 3,
        "type": 1
    },
    {
        "label": "Adding images",
        "status": 1,
        "color": "#58C3FE",
        "sprint": "1.2",
        "column": 3,
        "type": 2,
        "attached": [
            {
                name: "demo2.jpg",
                url: "demo2.jpg",
                isCover: true,
            }
        ]
    },
    {
        "label": "Create cards from the UI and from api",
        "status": 1,
        "color": "#58C3FE",
        "sprint": "1.2",
        "column": 3,
        "type": 1
    },
    {
        "label": "Draw swimlanes",
        "status": 2,
        "color": "#58C3FE",
        "sprint": "1.0",
        "column": 4,
        "type": 1
    },
    {
        "label": "Progress bar",
        "status": 2,
        "color": "#58C3FE",
        "sprint": "1.0",
        "column": 4,
        "type": 2
    },
]

export const columns = [
    {
        "label": "Backlog",
    },
    {
        "label": "In progress",
    },
    {
        "label": "Testing",
    },
    {
        "label": "Done",
    }
]

export const rows = [
    {
        "label": "Feature",
    },
    {
        "label": "Task",
    }
]