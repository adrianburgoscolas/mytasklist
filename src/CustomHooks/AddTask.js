import axios from 'axios'
import { useMutation, useQueryClient } from "@tanstack/react-query"

function AddTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (text) => {
      const res = await axios.post('/api/addtask', {text})
      return res.data
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export default AddTask
