import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';

export default () => {
    const [action, setAction] = useState('start');
    const [musicL, setMusicL] = useState('');
    const [songName, setSongName] = useState('');

    const callApi = async () => {
        const response = await fetch('/api/musicL');
        const body = await response.json();
        return body;
    }
    
    /*
    const startSearch = () => {
        setAction('search');
        callApi()
            .then(res => setMusicL(res))
            .catch(err => console.log(err));
    };
    */

    const startSearch = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('songName', songName);
        return postMessage(url, formData);
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        startSearch()
            .then((response) => {
                console.log(response.data);
            })
            .catch(err => console.log(err));

    };

    const handleValueChange = (e) => {
        let nextState =  e.target.value;
        setSongName(nextState);
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
            startSearch={startSearch}
            musicL={musicL}
            setMusicL={setMusicL}
            handleSearchFormSubmit={handleSearchFormSubmit}
            songName={songName}
            setSongName={setSongName}
            handleValueChange={handleValueChange}
        />
    );
};