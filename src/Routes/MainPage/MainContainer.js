import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';

export default () => {
    const [action, setAction] = useState('start');
    const [musicL, setMusicL] = useState('');

    const callApi = async () => {
        const response = await fetch('/api/musicL');
        const body = await response.json();
        return body;
    }
    
    const onSubmit = () => {
        setAction('search');
        callApi()
            .then(res => setMusicL(res))
            .catch(err => console.log(err));
    };

    /*
    useEffect(() => {
        callApi()
            .then(res => setMusicL(res))
            .catch(err => console.log(err));
    })
    */

    /*
    componentDidMount() {
        this.callApi()
            .then(res => setMusicL(res))
            .catch(err => console.log(err));
    }
    */

    return (
        <MainPresenter
            action={action}
            setAction={setAction}
            onSubmit={onSubmit}
            musicL={musicL}
            setMusicL={setMusicL}
        />
    );
};