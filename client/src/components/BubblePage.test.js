import React from "react";
import { render, screen, fireEvent, waitFor, getByText } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchData as mockFetchData } from '../api/fetchData';


jest, mock('../api/fetchData');

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchData.mockResolvedValueOnce([
    {
      "color": "aliceblue",
      "code": {
        "hex": "#f0f8ff"
      },
      "id": 1
    },
    {
      "color": "limegreen",
      "code": {
        "hex": "#99ddbc"
      },
      "id": 2
    },
    {
      "color": "sssss",
      "code": {
        "hex": "#ffebcd"
      },
      "id": 9
    },
    {
      "color": "blue",
      "code": {
        "hex": "#6093ca"
      },
      "id": 10
    },
    {
      "color": "blueviolet",
      "code": {
        "hex": "#8a2be2"
      },
      "id": 11
    }
  ])

  const { getByTestId } = render(<BubblePage />);

  await waitFor(() => expect(getByTestId(/ColorList/i).toHaveTextContent(/blue/i)));
  await waitFor(() => expect(getByTestId(/Bubbles/i).toHaveClass(/blue/i)));

}
);

