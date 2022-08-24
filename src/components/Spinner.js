import React, { memo } from 'react';

function Spinner({ loading }) {
    return (
        loading && (
            <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center spinner-border" role="status" />
            </div>)

    );
}

export default memo(Spinner);