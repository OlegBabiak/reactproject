import React, {useEffect, useState} from 'react';
import User from "../User/User";
import axios from "axios";
import {axiosService} from "../../../services/axiosService";
import {urls} from "../../../constants/urls";
import {userService} from "../../../services/userService";
import UserDetails from "../UserDetails/UserDetails";
import style from './Users.module.css'

// const Users = () => {
//
//     //  стандартна асинхронна функція (спочатку відпрацює все синхронне, а потім всі асинхронні функції (відповідно на виході масив users залишиться порожнім))
//     let users = [];
//     fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {users = value})
//     return (
//         <div>
//{/*               {console.log(users)}*/}
//{/*           // якщо масив порожній map() не відбудеться*/}
//             {users.map(user => <User key = {user.id} user = {user}/>)}
//         </div>
//     );
// };

//
// const Users = () => {
//     // для того, щоб відпрацювала асинхронна функція, а потім синхронна використовується один з "hook"-ів, що є в React  - useState()
//     // аргумент функції - початкове значення
//     // в даному випадку useState([])  - початкове значення = порожній масив
//
//     const state = useState([]);
//
//     // коли функція useState() виконується вона повертає масив в якому є 2 елементи
//     // в першому елементі те що зберігає цей state, другий елемент масиву це ще одна функція за допомогою якої можна змінити цей state
//     // деструктуризація масиву з useState() :
//     // const users = state[0];
//     // const setUsers = state[1]; // або:
//     const [users,setUsers] = state      //функція setUsers коли змінює(встановлює) значення users - першого елементу масиву що повернула функція useState([])
//                                                // повністю перезавантажує компоненту: (функцію) const Users = () => {....}
//                                                // і компонента відпрацює ще раз, але запам'ятає свій попередній стан
//                                     // або:
//     // const [users,setUsers]  = useState([]);
//
//     // але функція постійно буде перезапускати компоненту, щоб цього не відбувалось необхідно використати ще один hook: useEffect()
//     // необхідно помістити fetch() в useEffect()
//     // useEffect() створений для того, щоб він відпрацював один раз одразу після return (після закінчення всіх синхронних дій)
//     //  і блокує функції  setUsers() перезавантаження сторінки більше ніж 1 раз,
//     //  отже за перше відпрацювання відпрацюють синхроні функції, потім виконаються асинхронні та перезавантажиться компонента,
//     //  але запам'ятається попередній стан і при наступному відпрацюванні синхронних функцій результати роботи асинхронних з попереднього разу будуть доступні
//
//     //
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
//     }, []);
//     // кількість разів відпрацювання залежить від масиву deps:[] (масив залежностей (dependencies arr)), якщо його не має ефект буде той самий, що і без useEffect(),
//     // якщо він порожній наш call back з fetch() функцією відпрацює лише один раз після першого return
//     // якщо масиву deps:[] містить змінну яка змінила своє значення в процесі відпрацювання, useEffect() перезапустив би виконання call back функції ще раз - слідкує за змінами і може запускати callback ще раз


const Users = () => {


    const state = useState([]);
    // прописати initial state null (те що в нас має бути)
    const [userDetails, setUserDetails] = useState(null)


    const [users, setUsers] = state

    useEffect(() => {


        // fetch('https://jsonplaceholder.typicode.com/users') - ці дані виносяться в сервіси,
        // а fetch замінюється на axios(попередньо прописується в dependencies); axios - fetch "на максималках";
        // замість json() буде data  в .then(value => value.data)
        // створити: services/axiosService.js
        // '/users') - дописуються дані до базової URL, або замінити на дані з src\constants\urls.js : urls.users.base
        // axiosService('/users').then(value => value.data).then(value => setUsers(value))
        //
        //для кожної сутності створюється власний сервіс
        // і замісь axiosService(urls.users.base).then(value => value.data).then(value => setUsers(value))


        userService.getAll().then(value => value.data).then(value => setUsers(value))
        // і ще скоротити запис на рівнозначний:
        // userService.getAll().then(({data}) => setUsers(data))

    }, []);

    const getCurrentUser = (user) => {
        setUserDetails(user)
    }


    return (
        <div className={style.Users}>
            <div>

                {users.map(user => <User key={user.id} user={user} getCurrentUser={getCurrentUser}/>)}
            </div>
            <hr/>
            {userDetails != null && <UserDetails userDetails={userDetails}/>}

        </div>
    );
};

export default Users;