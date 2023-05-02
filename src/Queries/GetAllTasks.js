import axios from 'axios'
import {useQuery} from "@tanstack/react-query"

function GetAllTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await axios.get('https://task-list-backend-2x2u.onrender.com/api/alltask')
      return res.data
    },
  })
}

export default GetAllTasks
