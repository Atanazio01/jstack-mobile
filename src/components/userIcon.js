import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";
export function UserIcon() {
  return (
    <Svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
  >
    <G clipPath="url(#a)">
      <Circle cx={49.5} cy={99.5} r={47.5} fill="#000" />
      <Path
        fill="#fff"
        d="M48.648 75.182V81h-.705v-5.08h-.034l-1.42.944v-.716l1.454-.966h.705Zm2.184 1.454 1.046 1.785 1.045-1.785h.773l-1.41 2.182L53.697 81h-.773l-1.045-1.693L50.832 81h-.772l1.386-2.182-1.386-2.182h.772Z"
      />
      <Circle cx={50.5} cy={34.5} r={15.5} fill="#000" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h100v100H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}
