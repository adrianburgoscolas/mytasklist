import axios from 'axios'
import {useQuery} from "@tanstack/react-query"

function GetAllTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const url = `${process.env.TASKLIST_API_URL}/api/alltask` || '/api/alltask'
      const res = await axios.get()
      return res.data
    },
  })
}

export default GetAllTasks
