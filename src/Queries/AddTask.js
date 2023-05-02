import axios from 'axios'
import { useMutation, useQueryClient } from "@tanstack/react-query"

function AddTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (text) => {
      const res = await axios.post('https://task-list-backend-2x2u.onrender.com/api/addtask', {text})
      return res.data
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export default AddTask
