import { render } from 'react-dom'
import React from 'react'
import App from './App'
import Planaria from '@planaria/react-planaria'
const conf = {
  query: {
    q: {
      find: { 
        "out.s2": "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut", 
        "$or": [ 
          { "out.s4": "image/png" }, 
          { "out.s4": "image/jpg" }, 
          { "out.s4": "image/jpeg" }, 
          { "out.s4": "image/gif" }
        ], 
      },
      sort: { "blk.i": -1 },
      project: { "blk": 1, "tx.h": 1, "out.f3": 1 },
    }
  },
  limit: 3e3,
  crawl: true, 
}
render(<Planaria {...conf} app={App} />, document.getElementById('entry'))