import { useCallback, useState } from "react";
import ValueButton from "../buttons/ValueButton";
import Container from "./Container";

export default function ValuesContainer() {
    const [selectedTrait, setSelectedTrait] = useState<number>();

    const onTraitClick = useCallback((index: number) => {
        if (selectedTrait != index) setSelectedTrait(index);
        else setSelectedTrait(undefined);
    }, [selectedTrait])

    const onTraitConfirm = useCallback((index: number) => {
        setSelectedTrait(undefined);
        console.log('confirm', index);

    }, [selectedTrait])
    return (
        <Container label={"Values"}>
            {
                [0, 0, 0, 0, 0].map((_, index) =>
                    <ValueButton key={index}
                        onClick={() => onTraitClick(index)}
                        onConfirm={() => onTraitConfirm(index)}
                        selected={selectedTrait == index}
                    />
                )
            }
            <ValueButton hidden />

        </Container>
    )
}

