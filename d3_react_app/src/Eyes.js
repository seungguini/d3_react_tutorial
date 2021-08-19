export const Eyes = ({ eyeOffset, eyeR }) => (
  <>
    <circle cx={-eyeOffset} cy={-eyeOffset} r={eyeR} />
    <circle cx={eyeOffset} cy={-eyeOffset} r={eyeR} />
  </>
);
