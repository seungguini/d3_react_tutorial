import { BackgroundCircle } from "./BackgroundCircle"; // Named defaults
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { FaceContainer } from "./FaceContainer";

export const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffset,
  eyeR,
  mouthRadius,
  mouthWidth,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
    <BackgroundCircle
      radius={centerY - strokeWidth / 2}
      strokeWidth={strokeWidth}
    />
    <Eyes eyeOffset={eyeOffset} eyeR={eyeR} />
    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
  </FaceContainer>
);
