interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  textObjects: TextObject[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

export default Comic;
