import classes from './MatchElement.module.css'
import { MatchElementProps, MatchFillingData } from '../../types';
import React from 'react';
import { MatchFilling } from '../MatchFilling/MatchFilling';
export const MatchElement: React.FC<{props: MatchElementProps}> = ({ props }) => {
    return (
        <div style={props.styles} className={classes.container}>
            <MatchFilling data={props} />
        </div>
    )
}