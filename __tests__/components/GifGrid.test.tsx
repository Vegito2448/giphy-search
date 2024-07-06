import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
describe('GiftGrid Component', () => {

  const props = {
    category: 'One Punch Man'
  };

  test('matches snapshot', () => {
    const { asFragment } = render(<GifGrid {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<GifGrid {...props} />);
  });

  test('should render the component with loading', async () => {
    const loading = await screen.findByText('Loading...');

    expect(loading).toBeInTheDocument();

  });

  test('should render the component With Gifs', async () => {
    const loading = await screen.findByText('Loading...');


    expect(loading).toBeInTheDocument();
    const listItems = await screen.findByRole('list', undefined, {
      timeout: 1000
    });

    expect(listItems).toBeInTheDocument();

    expect(listItems.children.length).toBeGreaterThan(8);
    expect(loading).not.toBeInTheDocument();
  });

});