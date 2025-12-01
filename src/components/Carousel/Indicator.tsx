import React from 'react';
import klass from '../../cssClasses'; // Assuming cssClasses.ts is in src/

interface IndicatorProps {
    onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
    isSelected: boolean;
    index: number;
    label: string;
}

const Indicator: React.FC<IndicatorProps> = ({ onClickHandler, isSelected, index, label }) => {
    return (
        <li
            className={klass.DOT(isSelected)}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
        />
    );
};

export default Indicator;
