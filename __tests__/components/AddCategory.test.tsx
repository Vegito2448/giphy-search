import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { AddCategory } from "../../src/components";

describe('AddCategory Component', () => {

  const props = {
    setCategories: vi.fn()
  };
  test('matches snapshot', () => {
    const { asFragment } = render(<AddCategory {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<AddCategory
      {...props}
    />);
    userEvent.setup();
  });

  test('should render the component', () => {
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  test('should render the input and write in it', async () => {
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    await userEvent.type(input, 'React');

    expect(input).toHaveValue('React');
  });

  test('should submit the form', async () => {
    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'React');
    await userEvent.click(button);

    expect(props.setCategories).toHaveBeenCalled();
    expect(props.setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input).toHaveValue('');
  });

});