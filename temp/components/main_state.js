// state for the main component in index.js
export let main_state = {
  skills: [
    {
      id: 0,
      name: 'skill 0',
      on: false
    },
    {
      id: 1,
      name: 'skill 1',
      on: false
    },
    {
      id: 2,
      name: 'skill 2',
      on: false
    },
    {
      id: 3,
      name: 'skill 3',
      on: false
    },
    {
      id: 4,
      name: 'skill 4',
      on: false
    },
    {
      id: 5,
      name: 'skill 5',
      on: false
    },
  ],
  projects: [
    {
      id: 0,
      name: 'project 0',
      url: 'blank',
    },
    {
      id: 1,
      name: 'project 1',
      url: 'blank',
    },
    {
      id: 2,
      name: 'project 2',
      url: 'blank',
    },
    {
      id: 3,
      name: 'project 3',
      url: 'blank',
    }
  ],
  // Row index is skill number.
  // Col index is project number.
  skills_projects: [
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ],
};