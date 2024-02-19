import React from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {
    // useForm() - новий hook з бібліотеки react-hook-form
    // useForm() - містить набір функцій в т.ч.: reset, register, handleSubmit
    // handleSubmit - функція яка формує об'єкт з динамічним ключем(зчитує дані введені в форму)
    const {reset, register, handleSubmit} = useForm(); // повертає об'єкт

    //const save = (post) - item назва об'єкту довільна дані для якого беруться з {...register('title')} і {...register('body')}, і т.д. з input
    // handleSubmit - запускає функцію save при onSubmit форми
    const save = (item) => {
        // console.log(item)
        // передати дані збережені в форму на збереження в api
        // у відповідь отримається той самий об'єкт, але вже з ID
        // console.log(postService.create(item).then(value => value.data));// або те саме записати
        // де .then(({data}) - це response від api (відповідь від отримувача інформації)
        // postService.create(item).then(({data}) => console.log(data))

        //setPosts(prev => ([...prev, data]))) - setPosts бере попередні значення(prev) і збереже в масив зі всіма попередніми значеннями(...prev)
        // і дописати отримані дані(data)  як відповідь на post
        postService.create(item).then(({data}) => setPosts(prev => ([...prev, data])))

    }
    return (
        // в формі необхідно вказати onSubmit={} і вкласти handleSubmit
        // і в функцію handleSubmit покласти функцію яка віддасть готовий об'єкт з форми
        <form onSubmit={handleSubmit(save)}>
            {/*розкласти те що повертає register: ...register*/}
            <input type="text" placeholder={'title'} {...register('title')} />
            <input type="text" placeholder={'body'} {...register('body')} />
            {/*можна робити вкладені об'єкти: */}
            <input type="text" placeholder={'street'} {...register('address.street')} />
            <input type="number" placeholder={'buildingNumber'} {...register('address.buildingNumber')} />
            <button>Save</button>
        </form>
    );
};

export {PostForm};