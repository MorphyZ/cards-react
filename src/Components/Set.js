import {Card} from "./Card"
export function Set(){
    return(
        <div>
            <h2>Название набора</h2>
            <Card />
            <div className="elements">Элементы управления</div>
        </div>
    );
}