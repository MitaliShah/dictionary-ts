import axios,  { AxiosResponse, AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { DictionaryProps, ExtractedData } from "../type";

const ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

interface UseDictionaryProps {
  searchTerm: string;
}

export default function useDictionary({ searchTerm }: UseDictionaryProps) {
    const [data, setData] = useState<ExtractedData| null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(searchTerm.length < 3) {
          return;
        }

        const controller = new AbortController();
        const delayDebounceFn = setTimeout(() => { 
        const fetchData = async () => {   
    
          setIsLoading(true);
          setError(null);
    
          try {
            console.log(`Fetching data for: ${searchTerm}`);

            const response: AxiosResponse<DictionaryProps[]> = await axios.get(`${ENDPOINT}${searchTerm}`, { signal: controller.signal }
              );
            const entry = response.data[0];
            const firstMeaning = entry.meanings[0];
            const secondMeaning = entry.meanings[1];
           
            const extractedData: ExtractedData = {
              word: entry.word,
              phonetics: entry.phonetics,
              firstMeaning: {
                partOfSpeech: firstMeaning.partOfSpeech,
                definitions: firstMeaning.definitions,
              },
              secondMeaning: secondMeaning
                ? {
                    partOfSpeech: secondMeaning.partOfSpeech,
                    definitions: secondMeaning.definitions,
                    example: secondMeaning.definitions[0]?.example,
                  }
                : undefined,
              synonyms: firstMeaning.synonyms,
              sourceUrls: entry.sourceUrls,
            };
            setData(extractedData);
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              const axiosError = error as AxiosError;
              if (axiosError.response && axiosError.response.status === 404) {
                setError('Word not found in dictionary');
              } else {
                setError('An error occurred while fetching data');
              }
            } else {
              setError('An unknown error occurred while fetching data');
            }
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();

        return () => {
            controller.abort();
          };
        }, 300); // Debounce delay of 300ms
    
        return () => {
          clearTimeout(delayDebounceFn);
          controller.abort();
        };
      }, [searchTerm]);

      return {
        data,
        error,
        isLoading,
      };
}

