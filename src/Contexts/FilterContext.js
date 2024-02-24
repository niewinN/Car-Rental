import { createContext, useContext, useState } from 'react';

export const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        type: [],
        fuel: [],
        gearbox: [],
        hook: [],
    });
    const [options, setOptions] = useState([]);

    // const handleFilterChange = (key, option, isChecked) => {
    //     setFilters((prev) => {
    //       const newFilters = { ...prev };
    //       if (!newFilters[key]) {
    //         newFilters[key] = [];
    //       }
    //       if (isChecked) {
    //         if (!newFilters[key].includes(option)) {
    //           newFilters[key].push(option);
    //         }
    //       } else {
    //         newFilters[key] = newFilters[key].filter((item) => item !== option);
    //       }
    //       console.log(newFilters);

    //       if(key === 'type') {
    //         if(isChecked) {
    //           setHighlighted(prev => [...prev, option]);
    //         } else {
    //           setHighlighted(prev => prev.filter(item => item !== option));
    //         }
    //       }

    //       return newFilters;
    //     });
    //   };

    const handleFilterChange = (key, option, isChecked) => {
      console.log("Aktualizacja filtra:", key, option, isChecked);
    setFilters((prev) => {
        const newFilters = { ...prev };
        if (!newFilters[key]) {
            newFilters[key] = [];
        }
        if (isChecked) {
            if (!newFilters[key].includes(option)) {
                newFilters[key].push(option);
            }
        } else {
            newFilters[key] = newFilters[key].filter((item) => item !== option);
        }

        // Podświetlanie dla wszystkich kategorii
        if(['type', 'gearbox', 'rent'].includes(key)) {
            if(isChecked) {
                setHighlighted(prev => [...prev, option]);
            } else {
                setHighlighted(prev => prev.filter(item => item !== option));
            }
        }

        return newFilters;
    });
};


      const setOptionsForCategory = (categoryKey, categoryOptions) => {
        setOptions((prevOptions) => ({
          ...prevOptions,
          [categoryKey]: categoryOptions,
        }));
      };

      const [highlighted, setHighlighted] = useState([])

  return (
    <FilterContext.Provider value={{ filters, handleFilterChange, setOptionsForCategory, options, highlighted, setHighlighted, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};