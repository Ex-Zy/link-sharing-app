import type { ToastOptions } from 'react-toastify'
import { toast } from 'react-toastify'

export const useToast = () => {
  const toastId = 'toast-id'
  return {
    success: (message: string, options?: ToastOptions) => {
      toast.success(message, {
        position: 'top-center',
        toastId,
        autoClose: 3000,
        ...options
      })
    },
    error: (message: string, options?: ToastOptions) => {
      toast.error(message, {
        position: 'top-center',
        toastId,
        autoClose: 3000,
        ...options
      })
    }
  }
}
