import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { URL_PROFIL } from '../constants/urls/urlFrontEnd';

const HomeView = () => {

    return (
        <div className="flex flex-col items-center mt-[25rem]">
            <p className="font-extrabold text-primary">HOME</p>
            <Link to={URL_PROFIL}>
                <Button variant="contained" color="primary">
                    Profil View
                </Button>
            </Link>
        </div>
    );
};

export default HomeView;
