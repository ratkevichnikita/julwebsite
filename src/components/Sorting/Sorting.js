import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../../context";
import './sorting.css'

const Sorting = ({setSortByCategories,setSortByTopics}) => {
  const { sorting } = useContext(Context);
  const [productsSort,setProductsSort] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState([]);
  const [openSorting, setOpenSorting] = useState('');

  useEffect(() => {
    const onClick = e =>  {
      if(!e.target.closest('.sorting-item') ) {
        setOpenSorting('')
      }
    }
    document.addEventListener('click', onClick);
    setProductsSort(sorting)
    return () => document.removeEventListener('click', onClick);
  }, []);

  const sortingHandle = (id) => {
    setOpenSorting(id)
  };

  const getSelectedOptions = (newSort) => {
    const filterByTopic = newSort.filter(item => item.id === 's2').flatMap(item => item.options).filter(item => item.isSelected === true);
    const filterByCategory = newSort.filter(item => item.id === 's3').flatMap(item => item.options).filter(item => item.isSelected === true);
    const combinedSortSelected = [...filterByCategory, ...filterByTopic];
    const selectedCategoryName = filterByCategory[0]?.name || '';
    const selectedTopicName = filterByTopic[0]?.name || '';
    setSortByCategories(selectedCategoryName)
    setSortByTopics(selectedTopicName)
    setSelectedSorting(combinedSortSelected)
  }

  const optionHandler = (parentId,optionsId) => {
    const newSort = productsSort.map(item => {
      if(item.id === parentId) {
        return {
          ...item,
          options: item.options.map(el => {
            const selectAll = optionsId === 's2.1' || optionsId === 's3.1';
            if(selectAll) {
              return {
                ...el,
                isSelected: false
              }
            }
            if((el.id === optionsId && !selectAll)) {
              return {
                ...el,
                isSelected: true
              }
            } else {
              return {...el,isSelected: false}
            }
          })
        }
      } else {
        return {
          ...item,
        }
      }
    });
    getSelectedOptions(newSort)
    let newSortArr = newSort.flatMap((item,index) => {
      const isInnerOptionsSelected = item.options.some(item => item.isSelected)
      if(isInnerOptionsSelected) {
        return {
          ...item,
          isActive: isInnerOptionsSelected
        }
      } else {
        if(!isInnerOptionsSelected && item.id === 's1') {
          return {...item, isActive: false}
        } else {
          return {...item, isActive: index === 0}
        }
      }
    })

    setProductsSort(newSortArr)
  }

  const removeSortingItem = (id) => {
    const x = productsSort.map(item => {
      return {
        ...item,
        options: item.options.map(el => {
          if(el.id === id) {
            return {
              ...el,
              isSelected: false
            }
          } else {
            return {
              ...el
            }
          }
        })
      }
    })
    let newSortArr = x.flatMap((item,index) => {
      const isInnerOptionsSelected = item.options.some(item => item.isSelected)
      if(isInnerOptionsSelected) {
        return {
          ...item,
          isActive: isInnerOptionsSelected
        }
      } else {
        if(!isInnerOptionsSelected && item.id === 's1') {
          return {...item, isActive: false}
        } else {
          return {...item, isActive: index === 0}
        }
      }
    })
    getSelectedOptions(newSortArr)
    setProductsSort(newSortArr)
  }

  return (
    <div className={"sorting"}>
      <div className={"sorting-container"}>
        { productsSort.map((sort, i) => {
          const sortTitle = sort.options.filter(option => option.isSelected).map(o => o.name)[0] || sort.defaultValue;
          return (
            <div onClick={() => sortingHandle(sort.id)} key={sort.id} className={sort.isActive ? 'sorting-item selected': 'sorting-item'}>
              <div className="sorting-label">{sort.label}</div>
              <p className={i ===0 ? 'sorting-title w-auto' : 'sorting-title'}>
                <span>{sortTitle}</span>
                {sort.options.length > 0 && (
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3794 7.08838L4.44141 0.169625C4.21409 -0.0569268 3.84607 -0.0565459 3.61913 0.170797C3.39238 0.39811 3.39296 0.766341 3.62031 0.993069L10.1453 7.50003L3.62007 14.007C3.39276 14.2337 3.39217 14.6017 3.6189 14.829C3.73266 14.943 3.88169 15 4.03072 15C4.17938 15 4.32782 14.9434 4.44138 14.8302L11.3794 7.91164C11.4888 7.80272 11.5503 7.65448 11.5503 7.50003C11.5503 7.34557 11.4887 7.19751 11.3794 7.08838Z" />
                    </svg>
                  )
                }
              </p>
                {(sort.options.length > 0 && sort.id === openSorting) && (
                <div className="sorting-options">
                  { sort.options.map(option =>
                    <div
                      key={option.id}
                      className={option.isSelected ? 'sorting-option selected': 'sorting-option'}
                      onClick={() => optionHandler(sort.id,option.id)}
                    >
                      {option.name}
                    </div>)}
                </div>
              )
              }
            </div>
          )
        })
        }
      </div>

      { selectedSorting.length > 0 && (
        <div className={"sorting-selected"}>
          {selectedSorting.map(item =>
            <div className={"sorting-selected-item"} key={item.id}>
              {item.name}
              <svg onClick={() => removeSortingItem(item.id)} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.44683 16.4718L4.52808 15.5531L9.5812 10.5L4.52808 5.44683L5.44683 4.52808L10.5 9.5812L15.5531 4.52808L16.4718 5.44683L11.4187 10.5L16.4718 15.5531L15.5531 16.4718L10.5 11.4187L5.44683 16.4718Z" fill="#CF8C67"/>
              </svg>
            </div>
          )}
        </div>
      )

      }
    </div>
  );
};

export default Sorting;