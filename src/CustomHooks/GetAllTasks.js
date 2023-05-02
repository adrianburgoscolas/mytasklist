import axios from 'axios'
import {useQuery} from "@tanstack/react-query"

function GetAllTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await axios.get('/api/alltask')
      return res.data
    },
  })
}

export default GetAllTasks
