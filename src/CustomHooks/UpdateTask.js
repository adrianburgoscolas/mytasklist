import axios from 'axios'
import { useMutation, useQueryClient } from "@tanstack/react-query"

function UpdateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.patch('/api/updatetask', {id: data.id, text: data.text})
      return res.data
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export default UpdateTask


