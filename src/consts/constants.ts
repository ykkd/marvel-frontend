export const MARVEL_API_BASE_URL = "http://gateway.marvel.com/v1/public";

export const MARVEL_API_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY!;
export const MARVEL_API_PRIVATE_KEY =
  process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY!;

export const FETCH_CHARACTERS_LIMIT = 50;
export const FETCH_COMICS_LIMIT = 50;

export const HeaderSize = {
  height: 64,
};

export const LogoSize = {
  width: 150,
};

export const ThumbSize = {
  xs: {
    width: 125,
    height: 125,
  },
  sm: {
    width: 250,
    height: 250,
  },
};
