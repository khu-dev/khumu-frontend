import { webClient } from '@module/webClient'

export const FileApi = {
  upload: (formData: FormData) =>
    webClient.post('/images?hashing=false', formData),
}
