import { selectTraitBidCreation, setSelectedTrait } from "@renderer/redux/traitBid/traitBidCreationSlice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TraitButton from "../buttons/TraitButton";
import Container from "./Container";

export default function TraitsContainer() {
    const selectedTrait = useSelector(selectTraitBidCreation).selectedTrait;
    const dispatch = useDispatch();

    const onTraitClick = useCallback((index) => {
        if (selectedTrait != index) dispatch(setSelectedTrait(index));
        else dispatch(setSelectedTrait(undefined));
    }, [selectedTrait])

    return (
        <Container label="Traits">
            {
                [0, 0, 0, 0, 0].map((_, index) => <TraitButton key={index} onClick={() => onTraitClick(index)} selected={selectedTrait == index} />
                )
            }
            <TraitButton hidden />
        </Container>
    )
}