import { render, screen } from '@testing-library/react';
import { GifGridItem } from "../../src/components";

describe('GifGridItem Component', () => {

  const props = {
    title: 'Title',
    url: 'https://localhost/image.jpg',
    id: '1'

  };

  test('matches snapshot', () => {
    const { asFragment } = render(<GifGridItem {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<GifGridItem
      {...props}
    />);
  });

  test('should render the component', () => {
    const titleElement = screen.getByText('Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('should render the image with correct src and alt attributes', () => {
    const imageElement = screen.getByRole('img', { name: props.title });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', props.url);
    expect(imageElement).toHaveAttribute('alt', props.title);
  });

  test('should render container with class animate__fadeIn', () => {
    const container = document.querySelector('.animate__fadeIn');
    expect(container).toBeInTheDocument();
  });

});