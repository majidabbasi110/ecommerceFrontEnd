import React from "react";
import MenuAfterSignin from "./Menuaftersignin";
import "../styles.css";

const LayoutafterSignin = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <MenuAfterSignin />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default LayoutafterSignin;
