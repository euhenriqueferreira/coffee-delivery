import { ElementType } from "react";
import { BenefitContainer } from "./styles";

interface BenefitItemProps {
    icon: ElementType,
    highlightColor: string,
    text: string,
}

export function BenefitItem({ icon: Icon, highlightColor, text }: BenefitItemProps) {

    return (
        <BenefitContainer highlightcolor={highlightColor}>
            <div>
                <Icon size={16} weight='fill' />
            </div>
            <span>
                {text}
            </span>
        </BenefitContainer>
    )
}