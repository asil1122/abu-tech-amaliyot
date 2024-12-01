import { useMutation } from '@tanstack/react-query'
import { fileType } from '../../components/modal/modal-types'
import { request } from '../../config/request'

export const useKursCreate = () => {
  return (
   useMutation({
    mutationFn: (data: fileType) => request.post('/api/staff/contracts/create', data).then((res) => res.data),
   })
  )
}