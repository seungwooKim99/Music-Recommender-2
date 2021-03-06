import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';
import {post} from 'axios';

export default () => {
    const [action, setAction] = useState('start');
    const [musicL, setMusicL] = useState('');
    const [songName, setSongName] = useState('');
    const [selectedSongId, setSelectedSongId] = useState('');

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

    const changeStateToSearch = () => {
        setAction('search');
    }

    const startSearch = () => {
        const url = '/api/musicL';
        const formData = new FormData();
        formData.append('songName', songName);
        return post(url, formData);
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        startSearch()
            .then((response) => {
                console.log(response.data);
                setMusicL(response.data);
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

    const handleSelectedMusic = (e) => {
        console.log(e.target.id)
        let songId = e.target.id
        setSelectedSongId(songId);
    }

    const requestResult = () => {
        const url = '/api/musicL_';
        const formData = new FormData();
        formData.append('songId', selectedSongId);
        return post(url, formData);
    }

    const handleResultFormSubmit = (e) => {
        e.preventDefault();
        if (selectedSongId != '') {
            requestResult()
                .then((response) => {
                    console.log(response.data);
                })
                .catch(err => console.log(err));
        }
    }

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
            changeStateToSearch={changeStateToSearch}
            handleSelectedMusic={handleSelectedMusic}
            selectedSongId={selectedSongId}
            handleResultFormSubmit={handleResultFormSubmit}
        />
    );
};