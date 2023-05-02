import axios from 'axios'
import { useMutation, useQueryClient } from "@tanstack/react-query"

function DeleteTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete('https://task-list-backend-2x2u.onrender.com/api/deltask', {data: {id} })
      return res.data
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export default DeleteTask


