import { webClient } from 'src/module';

export const uploadImage = {
  post: (formData: FormData) => webClient.post('/images?hashing=false', formData),
};
