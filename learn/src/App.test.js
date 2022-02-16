import * as services from "./app/utilitys/fetchData"
import { act } from 'react-dom/test-utils';
import App from "./App"
import { render, screen } from "@testing-library/react";
const fetchPopular = jest.spyOn(services, "fetchPopular");


describe("melony", () => {
  beforeEach(async () => {
    fetchPopular.mockResolvedValue(new Array(20).fill(0).map((e,i) => (
      {
        "adult": false,
        "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity": 7902.493,
        "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 7810
      }
    )))
    await act(async () => {
        render(<App></App>)
      })
  })


  test('khourba', async () => {
      // screen.debug(undefined, 10000);
      const container = screen.getByTestId("popular");
      expect(container.childElementCount).toEqual(20)
    })
})