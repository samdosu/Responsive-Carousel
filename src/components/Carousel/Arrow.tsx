import React from 'react';
import klass from '../../cssClasses'; // Assuming cssClasses.ts is in src/

interface ArrowProps {
    direction: 'prev' | 'next';
    onClickHandler: () => void;
    enabled: boolean;
    label: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClickHandler, enabled, label }) => {
    const isPrev = direction === 'prev';
    const arrowClassName = isPrev ? klass.ARROW_PREV(!enabled) : klass.ARROW_NEXT(!enabled);

    return <button type="button" aria-label={label} className={arrowClassName} onClick={onClickHandler} />;
};

export default Arrow;
