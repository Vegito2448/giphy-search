import { ChangeEvent, FormEventHandler, useState } from "react";

interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export const AddCategory = ({ setCategories }: AddCategoryProps) => {

  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(prev => ([inputValue, ...prev]));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="search"
        onChange={handleInputChange}
        value={inputValue}
        style={{ marginRight: '10px' }}

      />
      <button type="submit">Search</button>
    </form>
  );
};
