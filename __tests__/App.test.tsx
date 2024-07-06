import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe('App Component', () => {

  test('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot after loading gifs', async () => {
    const { asFragment } = render(<App />);
    const listItem = await screen.findByRole('list', undefined, {
      timeout: 1000
    });
    expect(listItem).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<App />);
  });

  test('after loading first category should render the component with GifGrid', async () => {
    const loading = await screen.findByText('Loading...');

    expect(loading).toBeInTheDocument();

    const listItem = await screen.findByRole('list', undefined, {
      timeout: 1000
    });

    expect(listItem).toBeInTheDocument();
    expect(listItem.children).toHaveLength(10);
    expect(loading).not.toBeInTheDocument();

  });

});
