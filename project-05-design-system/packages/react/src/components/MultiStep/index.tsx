import * as S from "./styles";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <S.Container>
      <S.Label>
        Step {currentStep} of {size}
      </S.Label>
      <S.Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <S.Step key={step} active={Number(currentStep) >= step} />
        ))}
      </S.Steps>
    </S.Container>
  );
}

export { MultiStep };

MultiStep.displayName = "MultiStep";
