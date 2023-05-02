import axios from 'axios'
import { useMutation, useQueryClient } from "@tanstack/react-query"

function UpdateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.patch('https://task-list-backend-2x2u.onrender.com/api/updatetask', {id: data.id, text: data.text})
      return res.data
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export default UpdateTask


