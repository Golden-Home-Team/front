import {ReactNode} from "react";
import {overlay} from "overlay-kit";
import {BottomSheet} from "../BottomSheet";
import styled from "styled-components";

export function useBottomSheetSelector(label: string, name: string, bottomSheetContent: (onClose: () => void) => ReactNode) {
    const onClick = () => overlay.open(({isOpen, close}) => (
        <BottomSheet
            isOpen={isOpen}
            onClose={() => close()}
            title={label}
        >
            {bottomSheetContent(close)}
        </BottomSheet>
    ))

    return onClick
}