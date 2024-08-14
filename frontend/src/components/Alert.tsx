import { ReactNode } from "react";

interface Props {
    children: ReactNode; // children is a especial word name?
}


function Alert({children}: Props) {
    return (
        <div className="alert alert-primary">{children}
        </div>
    )
}

export default Alert;