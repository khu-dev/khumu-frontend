import { webClient } from 'src/module';

export const FileApi = {
  upload: (formData: FormData) => webClient.post('/images?hashing=false', formData),
};
