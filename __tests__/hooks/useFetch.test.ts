import { renderHook } from "@testing-library/react";
import { useFetch } from "../../src/hooks";
import { GifsResponse } from "../../src/interfaces";


describe('useFetch Hook', () => {


  test('should return the initial state', () => {
    const category = 'Rick and Morty';

    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

    const { result } = renderHook(() => useFetch<GifsResponse>({ url }));



    const { data, loading, error } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });

  test('should return the data, loading false and error null', async () => {
    const category = 'Rick and Morty';

    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

    const { result } = renderHook(() => useFetch<GifsResponse>({ url }));

    await new Promise((resolve) => setTimeout(resolve, 500));

    const { data, loading, error } = result.current;

    expect(data).toBeDefined();
    expect(loading).toBeFalsy();
    expect(error).toBeNull();
  });


});