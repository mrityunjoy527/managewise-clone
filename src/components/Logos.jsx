import { leftLogos, rightLogos } from "../logos";
import Logo from "./Logo";

export default function Logos() {

    let logos1 = leftLogos.map(logo => <Logo icon={logo}/>);
    const logos2 = rightLogos.map(logo => <Logo icon={logo}/>);

    logos1 = [...logos1, ...logos2];
    return <div className="logos">
        {logos1};
    </div>;
}