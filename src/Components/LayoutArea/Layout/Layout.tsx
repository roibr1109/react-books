import "./Layout.css"
import {Menu} from "../Menu/Menu";
import {Header} from "../Header/Header";

export function Layout(): JSX.Element {
    return (
        <div>
            <Menu/>
            <hr/>
            <Header/>
        </div>
    );
}
