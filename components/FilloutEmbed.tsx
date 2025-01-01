"use client"

import { FilloutPopupEmbed } from "@fillout/react";
import "@fillout/react/style.css";


interface Props {
    onClose?: () => void;
}
export const FilloutEmbed = ({ onClose }: Props) => {
    return (
        <FilloutPopupEmbed
        onClose={() => onClose()}
        filloutId="7CMioREfD6us"
        />
    );
};


