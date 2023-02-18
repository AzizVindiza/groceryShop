import React from 'react';
import './favorite.scss';
import img from "./img/image.jpg";
import StarRating from '../../Components/StarRating';
import {Link} from "react-router-dom";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react';
import { Switch, FormLabel } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../../Components/Card/Card";
import {setInStock,setStatus} from "../../redux/reducer/favorite";

const Favorite = () => {

    const {data,filter} = useSelector(state=>state.favorite)

    const dispatch = useDispatch()
    
    return (
        <>
   <section className="favorite">
            <div className="favorite__container">
                 <ul className="favorite__breadcrumb">
                    <li className="favorite__breadcrumb-item"  ><Link className="favorite__breadcrumb-link" to={"/"}>Главная</Link></li>

                    <li className="favorite__breadcrumb-item">Избраное</li>
                </ul>
                <h3 className="favorite__title">Избраное</h3>
                <div className="favorite__content">
                    {/* Левая сторона страницы */}
                    <div className="favorite__filter filter">
<div className="filter__title">Фильтр</div>
<div className="filter__top">
    <p className='filter__top-price'>Цена</p>
    <a href="" class="button filter__top-button">Очистить</a>
</div>
<div className="filter__slider">
    <div className="filter__slider-inputs">
        <input className="filter__slider-input" type="number" value={1}/>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="#414141"/>
</svg>

    <input className="filter__slider-input" type="number" value={100} />
    </div>
    <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 100]}   colorScheme='green'>
  <RangeSliderTrack>
    <RangeSliderFilledTrack bg='#70C05B'/>
  </RangeSliderTrack>
  <RangeSliderThumb index={0}  bg='#70C05B' />
  <RangeSliderThumb index={1} bg='#70C05B'/>
</RangeSlider>
</div>
<ul className='filter__list'>
    <li onClick={()=>dispatch(setStatus("sale"))}>sale</li>
    <li onClick={()=>dispatch(setStatus("new"))}>new</li>
</ul>

<div className="toggle">
      <Switch onChange={(e)=>dispatch(setInStock(e.target.checked))} id='isAvailable' colorScheme='green' />
  <FormLabel htmlFor='available' mb='0'>
  В наличии
  </FormLabel>
</div>
<button type="submit" class="filter__button">Применить</button>




                    </div>


                    {/* Правая сторона страницы */}
                    <div className="favorite__products products-favorite">
                        {/* Кнопки фильтрации справа над продуктами */}
                        <div className="products-favorite__filters">
                            <div className="products-favorite__filter active"> 
                                <p className="products-favorite__button">Цена от 99 до 2599</p>
                                <svg className="products-favorite__delete" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRull="evenodd" clipRule="evenodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill="#414141"/>
<path fillRull="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#414141"/>
                                </svg>
                            </div>
                            <div className="products-favorite__filter"> 
                                <p className="products-favorite__button">Очистить</p>
                                <svg className="products-favorite__delete" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRull="evenodd" clipRule="evenodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill="#414141"/>
<path fillRull="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#414141"/>
                                </svg>
                            </div>
                        </div>
                        {/* карточка продуктов */}
                        <div className="products-favorite__cards">
                            {
                                data.filter((item)=>{
                                    if(filter.inStock){
                                        return item.inStock
                                    }else if(filter.status.length > 0){
                                        return item.status === filter.status
                                    }
                                    return item
                                }).map((item)=>(
                                        <Card item={item} key={item.id}/>
                                    )
                                )
                            }
                        </div>
                        {

                              data.length > 6 ? (
                                  <button type="button" className="products-favorite__button-showMore">Показать
                                      ещё</button>
                              ) : data.length === 0 ? (<h2>Пусто</h2>) : ""
                        }


                    </div>
                </div>
            </div>
        </section>

        </>
    );
};

export default Favorite;