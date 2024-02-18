import React, {useRef, useState} from 'react';

const App = () => {

    // #1
    // const [count, setCount] = useState(0)

    // ЗБІР ДАНИХ З ФОРМИ БЕЗ БІБЛІОТЕК
    // #2
    // hook useRef для зберігання даних з input  можна задати в props ref={name} або ref={age}
    const name = useRef();
    const age = useRef();
    const save = (e) => {
        e.preventDefault()
        // витягнути інформацію з форми
        // console.log(name.current.value)
        // console.log(age.current.value)
        //     або
        //     console.log(e.target.name.value)
        //     console.log(e.target.age.value)
    }
        //     або
    const [user,setUser] = useState({});
    console.log(user)
    const handler = (e)=>{
        e.preventDefault()
        // ...prevState - розпакувати попереднє значення prevState(в новий об'єкт покласти те що було в старому об'єкті)
        // ,[e.target.name] - ключ по якому потрібно записати (name={''} динамічно підставляється)
        setUser(prevState => ({...prevState,[e.target.name]:e.target.value}))

    }
    return (
        <div>
            {/*/!*  #1  *!/*/}
            {/*<div>count: {count}</div>*/}
            {/*/!*<button onClick={() => setCount(count + 1)}>Increment</button>*!/*/}
            {/*/!*те саме можна записати: *!/*/}
            {/*/!*функція setCount містить в собі call back функцію prevState(назва довільна) який на початку = initial state*!/*/}
            {/*<button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>*/}


            {/*/!*  #2  *!/*/}
            {/*витягнути інформацію з форми */}
            {/*ЗБІР ДАНИХ З ФОРМИ БЕЗ БІБЛІОТЕК*/}

            {/*<form>*/}
            {/*<input type="text" placeholder={'name'} ref={name}/>*/}
            {/*<input type="number" placeholder={'age'} ref={age}/>*/}
            {/*<button onClick={save}>Save</button>*/}
            {/*або*/}
            {/*<form onSubmit={save}>*/}
            {/*    <input type="text" placeholder={'name'} name={'name'}/>*/}
            {/*    <input type="number" placeholder={'age'} name={'age'}/>*/}
            {/*    <button>Save</button>*/}
            {/*</form>*/}
            {/*або*/}
            <form>
                <input type="text" placeholder={'name'} name={'name'} onChange={handler}/>
                <input type="number" placeholder={'age'} name={'age'} onChange={handler}/>
                <button>Save</button>
            </form>



        </div>
    );
};

export default App;